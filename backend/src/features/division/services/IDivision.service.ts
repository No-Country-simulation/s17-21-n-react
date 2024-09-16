import { Paginated } from "../../../shared/interfaces/Paginated";
import { Division } from "../entities/division.entity";

export interface IDivisionService {
  getAllDivisions(
    page: number,
    size: number,
    filter?: Record<string, any>,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<Division>>;
  getDivisionById(id: string): Promise<Division | null>;
  create(createDto: Division): Promise<Division>;
  //delete(id: string): Promise<void>;
}