import { Paginated } from "../../../shared/interfaces/Paginated";
import { Classes } from "../entities/class.entity";

export interface IClassService {
  getAllClasses(page: number, size: number, filter?: any, sort?: any): Promise<Paginated<Classes>>;
  getClassById(id: string): Promise<Classes | null>;
  getClassByName(name: string): Promise<Classes | null>;
  create(createDto: Classes): Promise<Classes>;
  update(id: string, updateDto: Partial<Classes>): Promise<Classes | null>;
  delete(id: string): Promise<void>;
}
