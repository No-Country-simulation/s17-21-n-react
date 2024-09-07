import { Paginated } from "../../../shared/interfaces/Paginated";
import { Grade } from "../entities/Grade.entity";

export interface IGradeService {
  getAllGrades( page: number, size: number, filter?: any, sort?: any): Promise<Paginated<Grade> | null>;
  getGradeById(id: string): Promise<Grade | null>;
  create(data: Grade): Promise<Grade | null>;
  update(id: string, data: Partial<Grade>): Promise<Grade | null>;
  delete(id: string): Promise<void>;
}
