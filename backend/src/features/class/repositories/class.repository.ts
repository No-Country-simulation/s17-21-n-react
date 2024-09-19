import { Class, Prisma } from "@prisma/client";
import { IClassRepository } from "./Iclass.repository";
import prisma from "../../../infrastructure/database/prisma";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";
import { parseDate } from "../../../shared/utils";

export class ClassRepository implements IClassRepository {
  async findMany(skip: number, take: number, include?: Prisma.ClassInclude): Promise<Class[]> {
    try {
      return await prisma.class.findMany({
        include,
        skip,
        take,
        where: { isDeleted: false },
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findByUniqueCombination(classData: Class) {
    return await prisma.class.findUnique({
      where: {
        name_subjectId_yearId_date: {
          date     : new Date(classData.date).toISOString(),
          name     : classData.name,
          subjectId: classData.subjectId,
          yearId   : classData.yearId,
        },
      },
    });
  }

  async findById(id: string, include?: Prisma.ClassInclude): Promise<Class | null> {
    try {
      return await prisma.class.findUnique({ include, where: { id, isDeleted: false } });

    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findByName(name: string, include?: Prisma.ClassInclude): Promise<Class | null> {
    try {
      return await prisma.class.findFirst({ include, where: { name } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async create(classData: Class): Promise<Class> {
    try {
      const existingClass = await this.findByUniqueCombination(classData);
      if (existingClass) throw new Error("Class already exists");

      return await prisma.class.create({
        data   : { ...classData, date: new Date(classData.date).toISOString() },
        include: {
          subject: {
            select: { division: { select: { name: true } }, name: true },
          },
          year: { select: { year: true } },
        },
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async update(id: string, classData: Partial<Class>): Promise<Class | null> {
    try {
      return await prisma.class.update({
        data: {
          ...classData,
          ...classData?.date ? { date: parseDate(classData.date) } : {}
        }, where: { id }
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async delete(id: string): Promise<Class> {
    try {
      return await prisma.class.update({
        data : { isDeleted: true },
        where: { id },
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async count(): Promise<number> {
    try {
      return await prisma.class.count({ where: { isDeleted: false } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
