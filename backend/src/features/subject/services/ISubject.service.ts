import { Subject } from "@prisma/client";
import { Paginated } from "../../../shared/interfaces/Paginated";
import { SubjectCreate } from "../dto/subjectCreate.dto";
import { SubjectEntity } from "../entities/Subject.entity";
import { ISubjectFindMany } from "../repositories/ISubject.repository";

export interface ISubjectService {
  /*getAllSubjects(page: number, size: number, user: {
    userId?: string;
    role?: string;
  }): Promise<PageSubject>;*/
  getAllSubjects(args: ISubjectFindMany, user: {
    userId?: string;
    role?: string;
  }): Promise<Paginated<Subject>>;
  getSubjectById(id: string): Promise<SubjectEntity | null>;
  getSubjectByName(name: string): Promise<SubjectEntity | null>;
  create(subject: SubjectCreate): void;
  update(id: string, classData: Partial<SubjectEntity>): Promise<SubjectEntity | null>;
  delete(id: string): Promise<void>;
}
