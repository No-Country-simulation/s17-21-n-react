import { PageSubject } from "../dto/PageSubject";
import { SubjectEntity } from "../entities/Subject.entity";

export interface ISubjectService {
  getAllSubjects(page: number, size: number): Promise<PageSubject>;
  getSubjectById(id: string): Promise<SubjectEntity | null>;
  getSubjectByName(name: string): Promise<SubjectEntity | null>;
  create(subject: SubjectEntity): void;
  update(id: string, classData: Partial<SubjectEntity>): Promise<SubjectEntity | null>;
  delete(id: string): Promise<void>;
}
