import { Paginated } from "../../../shared/interfaces/Paginated";
import { Paginate } from "../../../shared/utils";
import { Grade } from "../entities/Grade.entity";
import { IGradeRepository } from "../repositories/IGrade.repository";
import { IGradeService } from "./IGrade.service";

export class GradeService implements IGradeService {
  private readonly _gradeRepository: IGradeRepository;

  constructor(gradeRepository: IGradeRepository) {
    this._gradeRepository = gradeRepository;
  }

  async getAllGrades(
    page: number,
    size: number,
    filter?: any,
    sort?: any
  ): Promise<Paginated<Grade> | null> {
    return Paginate<Grade>("grade", page, size, filter, sort);
  }

  async getGradeById(id: string): Promise<Grade | null> {
    return await this._gradeRepository.findById(id);
  }

  async create(data: Grade): Promise<Grade | null> {
    if (!data) throw new Error("Data to create cannot be empty.");
    return await this._gradeRepository.create(data);
  }

  async update(id: string, data: Grade): Promise<Grade | null> {
    if (!data) throw new Error("Data to update cannot be empty.");
    return await this._gradeRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return await this._gradeRepository.delete(id);
  }
}
