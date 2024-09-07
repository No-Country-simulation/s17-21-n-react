import { Paginated } from "../../../shared/interfaces/Paginated";
import { Classes } from "../entities/class.entity";
import { IClassService } from "./IClass.service";
import { Paginate } from "../../../shared/utils";
import { IClassRepository } from "../repositories/IClass.repository";

export class ClassService implements IClassService {
  private readonly _classRepository: IClassRepository;

  constructor(classRepository: IClassRepository) {
    this._classRepository = classRepository;
  }

  async getAllClasses(page: number, size: number): Promise<Paginated<Classes>> {
    return await Paginate<Classes>("class", page, size);
  }
  async getClassById(id: string): Promise<Classes | null> {
    return await this._classRepository.findById(id);
  }
  async getClassByName(name: string): Promise<Classes | null> {
    return await this._classRepository.findByName(name);
  }
  async create(createDto: Classes): Promise<Classes> {
    return await this._classRepository.create(createDto);
  }
  async update(id: string, updateDto: Classes): Promise<Classes | null> {
    return await this._classRepository.update(id, updateDto);
  }
  async delete(id: string): Promise<void> {
    await this._classRepository.delete(id);
  }
}
