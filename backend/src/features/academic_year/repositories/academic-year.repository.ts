import { AcademicYear } from "@prisma/client";
import { IAcademicYearRepository } from "./Iacademic-year.repository";
import prisma from "../../../infrastructure/database/prisma";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";

export class AcademicYearRepository implements IAcademicYearRepository {
  async findMany(skip: number, take: number): Promise<AcademicYear[]> {
    try {
      return await prisma.academicYear.findMany({
        skip,
        take
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findById(id: string): Promise<AcademicYear | null> {
    try {
      return await prisma.academicYear.findUnique({ where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findLatest(): Promise<AcademicYear | null> {
    try {
      return await prisma.academicYear.findFirst({ orderBy: { year: "desc" } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async create(academicYearData: AcademicYear): Promise<AcademicYear> {
    try {
      const existingAcademicYear = await prisma.academicYear.findFirst({
        where: { year: academicYearData.year }
      });
      if (existingAcademicYear) 
        throw new Error("Academic Year already exists");
      
      return await prisma.academicYear.create({ data: academicYearData });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  /*async delete(id: string): Promise<AcademicYear> {
    try {
      return await prisma.academicYear.update({
        data : { isDeleted: true },
        where: { id },
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }*/

  async count(): Promise<number> {
    try {
      return await prisma.academicYear.count();
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
