import { Subject } from "@prisma/client";

export interface ISubjectRepository {
  findMany(skip: number, take: number): Promise<Subject[]>;
  findById(id: string): Promise<Subject | null>;
  findByName(name: string): Promise<Subject | null>;
  create(subject: Subject): Promise<Subject>;
  update(id: string, data: Partial<Subject>): Promise<Subject | null>;
  delete(id: string): Promise<Subject>;
  count(): Promise<number>;
}
