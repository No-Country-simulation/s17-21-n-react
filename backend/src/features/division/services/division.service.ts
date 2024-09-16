import { Paginated } from "../../../shared/interfaces/Paginated";
import { Division } from "../entities/division.entity";
import { IDivisionService } from "./IDivision.service";
import { Paginate } from "../../../shared/utils";
import { IDivisionRepository } from "../repositories/Idivision.repository";

export class DivisionService implements IDivisionService {
  private readonly _divisionRepository: IDivisionRepository;

  constructor(divisionRepository: IDivisionRepository) {
    this._divisionRepository = divisionRepository;
  }

  async getAllDivisions(
    page: number,
    size: number,
    filter?: Record<string, any>,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<Division>> {
    return await Paginate<Division>("division", page, size, filter, sort);
  }

  async getDivisionById(id: string): Promise<Division | null> {
    return await this._divisionRepository.findById(id);
  }

  async create(createDto: Division): Promise<Division> {
    return await this._divisionRepository.create(createDto);
  }

  /*async delete(id: string): Promise<void> {
    await this._divisionRepository.delete(id);
  }*/
}
