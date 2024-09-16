import { Paginated } from "../../../shared/interfaces/Paginated";
import { AcademicYear } from "../entities/academic-year.entity";

export interface IAcademicYearService {
  getAllAcademicYears(
    page: number,
    size: number,
    filter?: Record<string, any>,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<AcademicYear>>;
  getAcademicYearById(id: string): Promise<AcademicYear | null>;
  create(createDto: AcademicYear): Promise<AcademicYear>;
  //delete(id: string): Promise<void>;
}