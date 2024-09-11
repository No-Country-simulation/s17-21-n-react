import { Enrollment, Prisma } from "@prisma/client";
import { IEnrollmentRepository } from "./IEnrollmentRepository";
import prisma from "../../../infrastructure/database/prisma";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";

export class EnrollmentRepository implements IEnrollmentRepository {
  async findMany(skip: number, take: number, filter?: any, sort?: any): Promise<Enrollment[]> {
    try {
      let whereClause: Prisma.EnrollmentWhereInput = {};
      if (filter) {
        if (filter.studentId) whereClause.studentId = filter.studentId;
        if (filter.year) {
          whereClause.year = {
            year: filter.year
          };
        }
      }
      return await prisma.enrollment.findMany({
        where: whereClause,
        skip,
        take: take,
        orderBy: sort,
        include: {
          student: true,
          division: true,
          year: true,
          subject: true
        }
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findByUniqueCombination(EnrollmentData: Enrollment) {
    return await prisma.enrollment.findUnique({
      where: {
        name_subjectId_divisionId_yearId: {
          name: EnrollmentData.name,
          subjectId: EnrollmentData.subjectId,
          divisionId: EnrollmentData.divisionId,
          yearId: EnrollmentData.yearId,
        },
      },
    });
  }

  async findById(id: string): Promise<Enrollment | null> {
    try {
      return await prisma.enrollment.findUnique({ where: { id, isDeleted: false } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findByName(name: string): Promise<Enrollment | null> {
    try {
      return await prisma.enrollment.findFirst({ where: { name } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findEnrollmentsByStudentAndYear(studentId: string): Promise<Enrollment | null> {
    try {
      let whereClause: any = {};
      return await prisma.enrollment.findMany({ where: { studentId } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async create(EnrollmentData: Enrollment): Promise<Enrollment> {
    try {
      const existingEnrollment = await this.findByUniqueCombination(EnrollmentData);
      if (existingEnrollment) {
        throw new Error("Enrollment already exists");
      }
      return await prisma.enrollment.create({ data: EnrollmentData });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async update(id: string, EnrollmentData: Partial<Enrollment>): Promise<Enrollment | null> {
    try {
      return await prisma.enrollment.update({ where: { id }, data: EnrollmentData });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async delete(id: string): Promise<Enrollment> {
    try {
      return await prisma.enrollment.update({
        where: { id },
        data: { isDeleted: true },
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async count(): Promise<number> {
    try {
      return await prisma.enrollment.count();
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
