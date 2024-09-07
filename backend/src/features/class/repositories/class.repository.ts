import { Class } from "@prisma/client";
import { IClassRepository } from "./IClass.repository";
import prisma from "../../../infrastructure/database/prisma";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";

export class ClassRepository implements IClassRepository {
  async findMany(skip: number, take: number): Promise<Class[]> {
    try {
      return await prisma.class.findMany({
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
        name_subjectId_divisionId_yearId: {
          name: classData.name,
          subjectId: classData.subjectId,
          divisionId: classData.divisionId,
          yearId: classData.yearId,
        },
      },
    });
  }

  async findById(id: string): Promise<Class | null> {
    try {
      return await prisma.class.findUnique({ where: { id, isDeleted: false } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findByName(name: string): Promise<Class | null> {
    try {
      return await prisma.class.findFirst({ where: { name } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async create(classData: Class): Promise<Class> {
    try {
      const existingClass = await this.findByUniqueCombination(classData);
      if (existingClass) {
        throw new Error("Class already exists");
      }
      return await prisma.class.create({ data: classData });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async update(id: string, classData: Partial<Class>): Promise<Class | null> {
    try {
      return await prisma.class.update({ where: { id }, data: classData });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async delete(id: string): Promise<Class> {
    try {
      return await prisma.class.update({
        where: { id },
        data: { isDeleted: true },
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async count(): Promise<number> {
    try {
      return await prisma.class.count();
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
