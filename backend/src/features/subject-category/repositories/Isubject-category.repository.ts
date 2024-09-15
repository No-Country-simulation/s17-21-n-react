import { SubjectCategory } from "@prisma/client";

export interface ISubjectCategoryRepository {
  findMany(skip: number, take: number): Promise<SubjectCategory[]>;
  findById(id: string): Promise<SubjectCategory | null>;
  create(subjectCategoryData: SubjectCategory): Promise<SubjectCategory>;
  //delete(id: string): Promise<SubjectCategory>;
  count(): Promise<number>;
}