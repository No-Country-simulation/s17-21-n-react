import { Prisma } from "@prisma/client";
import { Paginated } from "../../../shared/interfaces/Paginated";
import { SubjectTeacher } from "../entities/subject-teacher.entity";

export interface ISubjectTeacherService {
  getAllSubjectTeachers(
    page: number,
    size: number,
    filter?: Prisma.SubjectTeacherWhereInput,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<SubjectTeacher>>;
  getSubjectTeacherById(id: string): Promise<SubjectTeacher | null>;
  create(createDto: SubjectTeacher): Promise<SubjectTeacher>;
  //delete(id: string): Promise<void>;
}