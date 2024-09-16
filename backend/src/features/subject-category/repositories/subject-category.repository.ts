import { SubjectCategory } from "@prisma/client";
import { ISubjectCategoryRepository } from "./Isubject-category.repository";
import prisma from "../../../infrastructure/database/prisma";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";

export class SubjectCategoryRepository implements ISubjectCategoryRepository {
  async findMany(skip: number, take: number): Promise<SubjectCategory[]> {
    try {
      return await prisma.subjectCategory.findMany({
        skip,
        take
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findById(id: string): Promise<SubjectCategory | null> {
    try {
      return await prisma.subjectCategory.findUnique({ where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async create(subjectCategoryData: SubjectCategory): Promise<SubjectCategory> {
    try {
      const existingSubjectCategory = await prisma.subjectCategory.findFirst({
        where: { name: subjectCategoryData.name }
      });
      if (existingSubjectCategory) 
        throw new Error("Subject Category already exists");
      
      return await prisma.subjectCategory.create({ data: subjectCategoryData });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  /*async delete(id: string): Promise<SubjectCategory> {
    try {
      return await prisma.subjectCategory.update({
        data : { isDeleted: true },
        where: { id },
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }*/

  async count(): Promise<number> {
    try {
      return await prisma.subjectCategory.count();
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
