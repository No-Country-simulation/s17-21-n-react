import { Class, Prisma } from "@prisma/client";

export interface IClassRepository {
  findMany(skip: number, take: number): Promise<Class[]>;
  findByUniqueCombination(classData: Class, include?: Prisma.ClassInclude): Promise<Class | null>;
  findById(id: string, include?: Prisma.ClassInclude): Promise<Class | null>;
  findByName(name: string, include?: Prisma.ClassInclude): Promise<Class | null>;
  create(classData: Class): Promise<Class>;
  update(id: string, classData: Partial<Class>): Promise<Class | null>;
  delete(id: string): Promise<Class>;
  count(): Promise<number>;
}
