import { SubjectTeacher } from "@prisma/client";

export interface ISubjectTeacherRepository {
  findMany(skip: number, take: number): Promise<SubjectTeacher[]>;
  findById(id: string): Promise<SubjectTeacher | null>;
  create(subjectCategoryData: SubjectTeacher): Promise<SubjectTeacher>;
  count(): Promise<number>;
}