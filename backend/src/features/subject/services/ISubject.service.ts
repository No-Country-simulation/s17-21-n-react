import { Subject } from "@prisma/client";
import { Paginated } from "../../../shared/interfaces/Paginated";
import { SubjectCreate, SubjectTeachersOperations } from "../dto/subjectCreate.dto";
import { SubjectEntity } from "../entities/Subject.entity";
import { FindSubjectOptions } from "../dto/subjectSelect.dto";

export interface ISubjectService {
  getAllSubjects(
    page: number,
    size: number,
    filter?: FindSubjectOptions,
    sort?: Record<string, "asc" | "desc">,
    user?: { userId?: string; role?: string }
  ): Promise<Paginated<Subject>>;
  getSubjectById(id: string): Promise<SubjectEntity | null>;
  getSubjectByName(name: string): Promise<SubjectEntity | null>;
  create(subject: SubjectCreate): Promise<SubjectEntity>;
  update(
    id: string,
    classData: Partial<SubjectEntity> & { subjectTeachers?: SubjectTeachersOperations }

  ): Promise<SubjectEntity | null>;
  delete(id: string): Promise<void>;
}
