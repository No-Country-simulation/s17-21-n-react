import { Paginated } from "../../../shared/interfaces/Paginated";
import { SubjectCategory } from "../entities/subject-category.entity";

export interface ISubjectCategoryService {
  getAllSubjectCategories(
    page: number,
    size: number,
    filter?: Record<string, any>,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<SubjectCategory>>;
  getSubjectCategoryById(id: string): Promise<SubjectCategory | null>;
  create(createDto: SubjectCategory): Promise<SubjectCategory>;
  //delete(id: string): Promise<void>;
}