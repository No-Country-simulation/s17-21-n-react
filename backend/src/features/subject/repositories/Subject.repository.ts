import { ISubjectRepository } from "./ISubject.repository";
import prisma from "../../../infrastructure/database/prisma";
import { Subject } from "@prisma/client";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";

export class SubjectRepository implements ISubjectRepository {
  async findMany(skip: number, take: number): Promise<Subject[]> {
    try {
      return await prisma.subject.findMany({ skip, take });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async findById(id: string): Promise<Subject | null> {
    try {
      return await prisma.subject.findUnique({ where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async findByName(name: string): Promise<Subject | null> {
    try {
      return await prisma.subject.findFirst({ where: { name } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async create(subject: Subject): Promise<Subject> {
    try {
      if (!subject) throw new Error("Data to create cannot be empty");
      return await prisma.subject.create({ data: subject });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async update(id: string, subject: Subject): Promise<Subject> {
    try {
      return await prisma.subject.update({ where: { id }, data: subject });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async delete(id: string): Promise<Subject> {
    try {
      return await prisma.subject.delete({ where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async count(): Promise<number> {
    try {
      return await prisma.subject.count();
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
