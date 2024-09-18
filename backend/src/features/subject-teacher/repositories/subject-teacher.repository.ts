import { SubjectTeacher } from "@prisma/client";
import { ISubjectTeacherRepository } from "./Isubject-teacher.repository";
import prisma from "../../../infrastructure/database/prisma";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";

export class SubjectTeacherRepository implements ISubjectTeacherRepository {
  async findMany(skip: number, take: number): Promise<SubjectTeacher[]> {
    try {
      return await prisma.subjectTeacher.findMany({
        skip,
        take
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findById(id: string): Promise<SubjectTeacher | null> {
    try {
      return await prisma.subjectTeacher.findUnique({ where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async create(subjectTeacherData: SubjectTeacher): Promise<SubjectTeacher> {
    try {
      const existingSubjectTeacher = await prisma.subjectTeacher.findFirst({
        where: {
          AND: [
            { teacherId: subjectTeacherData.teacherId },
            { subjectId: subjectTeacherData.subjectId },
            { yearId: subjectTeacherData.yearId }
          ]
        }
      });
      if (existingSubjectTeacher) 
        throw new Error("Subject Category already exists, please verify data");
      
      return await prisma.subjectTeacher.create({ data: subjectTeacherData });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  
  /*async delete(id: string): Promise<SubjectTeacher> {
    try {
      return await prisma.subjectTeacher.update({
        data : { isDeleted: true },
        where: { id },
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }*/

  async count(): Promise<number> {
    try {
      return await prisma.subjectTeacher.count();
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
