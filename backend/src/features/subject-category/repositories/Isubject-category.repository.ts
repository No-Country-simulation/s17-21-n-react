import { SubjectCategory } from "@prisma/client";

export interface ISubjectCategoryRepository {
  findMany(skip: number, take: number): Promise<SubjectCategory[]>;
  findById(id: string): Promise<SubjectCategory | null>;
  create(subjectCategoryData: SubjectCategory): Promise<SubjectCategory>;
  update(id: string, updateDto: SubjectCategory): Promise<SubjectCategory>;
  count(): Promise<number>;
}