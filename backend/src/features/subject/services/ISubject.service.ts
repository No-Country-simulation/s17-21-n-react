import { PageSubject } from "../dto/PageSubject";
import { SubjectCreate } from "../dto/subjectCreate.dto";
import { FindSubjectOptions } from "../dto/subjectSelect.dto";
import { SubjectEntity } from "../entities/Subject.entity";

export interface ISubjectService {
  getAllSubjects(page: number, size: number, filter?: FindSubjectOptions, sort?: Record<string, "asc" | "desc">): Promise<PageSubject>;
  getSubjectById(id: string): Promise<SubjectEntity | null>;
  getSubjectByName(name: string): Promise<SubjectEntity | null>;
  create(subject: SubjectCreate): void;
  update(id: string, classData: Partial<SubjectEntity>): Promise<SubjectEntity | null>;
  delete(id: string): Promise<void>;
}
