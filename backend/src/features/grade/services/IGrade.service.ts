import { Paginated } from "../../../shared/interfaces/Paginated";
import { Grade } from "../entities/Grade.entity";

export interface IGradeService {
  getAllGrades(
    page: number,
    size: number,
    filter?: Record<string, any>,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<Grade> | null>;
  getGradeById(id: string): Promise<Grade | null>;
  create(data: Partial<Grade>): Promise<Grade | null>;
  update(id: string, data: Partial<Grade>): Promise<Grade | null>;
  delete(id: string): Promise<void>;
}
