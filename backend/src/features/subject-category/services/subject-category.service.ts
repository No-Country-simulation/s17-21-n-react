import { Paginated } from "../../../shared/interfaces/Paginated";
import { SubjectCategory } from "../entities/subject-category.entity";
import { ISubjectCategoryService } from "./ISubjectCategory.service";
import { Paginate } from "../../../shared/utils";
import { ISubjectCategoryRepository } from "../repositories/Isubject-category.repository";
import { Prisma } from "@prisma/client";

export class SubjectCategoryService implements ISubjectCategoryService {
  private readonly _subjectCategoryRepository: ISubjectCategoryRepository;

  constructor(subjectCategoryRepository: ISubjectCategoryRepository) {
    this._subjectCategoryRepository = subjectCategoryRepository;
  }

  async getAllSubjectCategories(
    page: number,
    size: number,
    filter?: Prisma.SubjectCategoryWhereInput,
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

  async update(id: string, updateDto: SubjectCategory): Promise<SubjectCategory> {
    return await this._subjectCategoryRepository.update(id, updateDto);
  }

  /*async delete(id: string): Promise<void> {
    await this._subjectCategoryRepository.delete(id);
  }*/
}
