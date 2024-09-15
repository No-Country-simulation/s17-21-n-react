import { Paginated } from "../../../shared/interfaces/Paginated";
import { SubjectCategory } from "../entities/subject-category.entity";
import { ISubjectCategoryService } from "./ISubjectCategory.service";
import { Paginate } from "../../../shared/utils";
import { ISubjectCategoryRepository } from "../repositories/Isubject-category.repository";

export class SubjectCategoryService implements ISubjectCategoryService {
  private readonly _subjectCategoryRepository: ISubjectCategoryRepository;

  constructor(academicYearRepository: ISubjectCategoryRepository) {
    this._subjectCategoryRepository = academicYearRepository;
  }

  async getAllSubjectCategories(
    page: number,
    size: number,
    filter?: Record<string, any>,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<SubjectCategory>> {
    return await Paginate<SubjectCategory>("subjectCategory", page, size, filter, sort);
  }

  async getSubjectCategoryById(id: string): Promise<SubjectCategory | null> {
    return await this._subjectCategoryRepository.findById(id);
  }

  async create(createDto: SubjectCategory): Promise<SubjectCategory> {
    return await this._subjectCategoryRepository.create(createDto);
  }

  /*async delete(id: string): Promise<void> {
    await this._subjectCategoryRepository.delete(id);
  }*/
}
