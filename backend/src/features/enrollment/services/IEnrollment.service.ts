import { Paginated } from "../../../shared/interfaces/Paginated";
import { Enrollments } from "../entities/enrollment.entity";

export interface IEnrollmentService {
  getAllEnrollments(page: number, size: number, filter?: any, sort?: any): Promise<Paginated<Enrollments>>;
  getEnrollmentById(id: string): Promise<Enrollments | null>;
  getEnrollmentByName(name: string): Promise<Enrollments | null>;
  create(createDto: Enrollments): Promise<Enrollments>;
  update(id: string, updateDto: Partial<Enrollments>): Promise<Enrollments | null>;
  delete(id: string): Promise<void>;
}
