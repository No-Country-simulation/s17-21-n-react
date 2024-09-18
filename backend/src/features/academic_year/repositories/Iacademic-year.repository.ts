import { AcademicYear } from "@prisma/client";

export interface IAcademicYearRepository {
  findMany(skip: number, take: number): Promise<AcademicYear[]>;
  findById(id: string): Promise<AcademicYear | null>;
  findLatest(): Promise<AcademicYear | null>;
  create(classData: AcademicYear): Promise<AcademicYear>;
  //delete(id: string): Promise<AcademicYear>;
  count(): Promise<number>;
}