import { Paginated } from "../../../shared/interfaces/Paginated";
import { AcademicYear } from "../entities/academic-year.entity";
import { IAcademicYearService } from "./IAcademicYear.service";
import { Paginate } from "../../../shared/utils";
import { IAcademicYearRepository } from "../repositories/Iacademic-year.repository";

export class AcademicYearService implements IAcademicYearService {
  private readonly _academicYearRepository: IAcademicYearRepository;

  constructor(academicYearRepository: IAcademicYearRepository) {
    this._academicYearRepository = academicYearRepository;
  }

  async getAllAcademicYears(
    page: number,
    size: number,
    filter?: Record<string, any>,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<AcademicYear>> {
    return await Paginate<AcademicYear>("academicYear", page, size, filter, sort);
  }

  async getAcademicYearById(id: string): Promise<AcademicYear | null> {
    return await this._academicYearRepository.findById(id);
  }

  async create(createDto: AcademicYear): Promise<AcademicYear> {
    return await this._academicYearRepository.create(createDto);
  }

  /*async delete(id: string): Promise<void> {
    await this._academicYearRepository.delete(id);
  }*/
}
