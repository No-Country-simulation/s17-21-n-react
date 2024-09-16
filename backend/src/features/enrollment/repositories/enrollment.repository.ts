import { Enrollment, Prisma } from "@prisma/client";
import { IEnrollmentRepository } from "./IEnrollmentRepository";
import prisma from "../../../infrastructure/database/prisma";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";

export class EnrollmentRepository implements IEnrollmentRepository {
  async findMany(skip: number, take: number, filter?: any, sort?: any): Promise<Enrollment[]> {
    try {
      const whereClause: Prisma.EnrollmentWhereInput = {};
      if (filter) {
        if (filter.studentId) whereClause.studentId = filter.studentId;
        if (filter.year) 
          whereClause.year = {
            year: filter.year
          };
        
      }
      return await prisma.enrollment.findMany({
        include: {
          division: true,
          student : true,
          subject : true,
          year    : true
        },
        orderBy: sort,
        skip,
        take   : take,
        where  : whereClause
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findByUniqueCombination(EnrollmentData: Enrollment) {
    return await prisma.enrollment.findUnique({
      where: {
        studentId_subjectId_divisionId_yearId: {
          divisionId: EnrollmentData.divisionId,
          studentId : EnrollmentData.studentId,
          subjectId : EnrollmentData.subjectId,
          yearId    : EnrollmentData.yearId,
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

  async findEnrollmentsByStudentAndYear(studentId: string, year: number): Promise<Enrollment[] | null> {
    try {
      return await prisma.enrollment.findMany({ where: { studentId, year: { year } } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async create(EnrollmentData: Enrollment): Promise<Enrollment> {
    try {
      const existingEnrollment = await this.findByUniqueCombination(EnrollmentData);
      if (existingEnrollment) 
        throw new Error("Enrollment already exists");
      
      return await prisma.enrollment.create({ data: EnrollmentData });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async update(id: string, EnrollmentData: Partial<Enrollment>): Promise<Enrollment | null> {
    try {
      return await prisma.enrollment.update({ data: EnrollmentData, where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async delete(id: string): Promise<Enrollment> {
    try {
      return await prisma.enrollment.update({
        data : { isDeleted: true },
        where: { id },
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
