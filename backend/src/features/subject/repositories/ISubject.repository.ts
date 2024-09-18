import { Subject } from "@prisma/client";
import { FindSubjectOptions } from "../dto/subjectSelect.dto";
import { Paginated } from "../../../shared/interfaces/Paginated";

export interface ISubjectFindMany {
  filter?: FindSubjectOptions;
  page: number;
  pageSize: number;
  sort?: Record<string, "asc" | "desc">
}

export interface ISubjectRepository {
  findMany(args: ISubjectFindMany, user: {
    userId?: string;
    role?: string;
  }): Promise<Paginated<Subject>>;
  findById(id: string): Promise<Subject | null>;
  findByName(name: string): Promise<Subject | null>;
  create(subject: Subject): Promise<Subject>;
  update(id: string, data: Partial<Subject>): Promise<Subject | null>;
  delete(id: string): Promise<Subject>;
  count(): Promise<number>;
}
