import { Grade } from "@prisma/client";
import { IGradeRepository } from "./IGrade.repository";
import { ErrorHandler } from "../../../shared/utils";
import prisma from "../../../infrastructure/database/prisma";

export class GradeRepository implements IGradeRepository {
  async findMany(skip: number, take: number): Promise<Grade[]> {
    try {
      if (skip < 0 || take < 0) 
        throw new Error("skip and take must be greater than 0");
      
      return await prisma.grade.findMany({ skip, take });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async findById(id: string): Promise<Grade | null> {
    try {
      if (!id) 
        throw new Error("id cannot be empty");
      
      return prisma.grade.findUnique({ where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async create(grade: Grade): Promise<Grade> {
    try {
      return await prisma.grade.create({ data: grade });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async update(id: string, grade: Grade): Promise<Grade | null> {
    try {
      return await prisma.grade.update({ data: grade, where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await prisma.grade.update({ data: { isDeleted: true }, where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async count(): Promise<number> {
    try {
      return await prisma.grade.count({ where: { isDeleted: false } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
