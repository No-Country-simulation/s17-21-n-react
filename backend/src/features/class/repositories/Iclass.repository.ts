import { Class } from "@prisma/client";

export interface IClassRepository {
  findMany(skip: number, take: number): Promise<Class[]>;
  findById(id: string): Promise<Class | null>;
  findByName(name: string): Promise<Class | null>;
  create(classData: Class): Promise<Class>;
  update(id: string, classData: Partial<Class>): Promise<Class | null>;
  delete(id: string): Promise<Class>;
  count(): Promise<number>;
}
