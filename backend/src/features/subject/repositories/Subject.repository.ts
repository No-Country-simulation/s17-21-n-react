import { ISubjectRepository } from "./ISubject.repository";
import prisma from "../../../infrastructure/database/prisma";
import { Subject } from "@prisma/client";

export class SubjectRepository implements ISubjectRepository {
  async findMany(skip: number, take: number): Promise<Subject[]> {
    return prisma.subject.findMany({
      skip,
      take,
    });
  }
  async findById(id: string): Promise<Subject | null> {
    return prisma.subject.findUnique({ where: { id } });
  }
  async findByName(name: string): Promise<Subject | null> {
    return prisma.subject.findUnique({ where: { name } });
  }
  async create(subject: Subject): Promise<Subject> {
    return prisma.subject.create({ data: subject });
  }
  async update(id: string, subject: Subject): Promise<Subject> {
    return prisma.subject.update({ data: subject, where: { id } });
  }
  async delete(id: string): Promise<Subject> {
    return prisma.subject.delete({ where: { id } });
  }
  async count(): Promise<number> {
    return prisma.subject.count();
  }
}
