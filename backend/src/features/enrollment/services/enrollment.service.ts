import { Paginated } from "../../../shared/interfaces/Paginated";
import { Paginate } from "../../../shared/utils";
import { Enrollments } from "../entities/enrollment.entity";
import { IEnrollmentRepository } from "../repositories/IEnrollmentRepository";
import { IEnrollmentService } from "./IEnrollment.service";

export class EnrollmentService implements IEnrollmentService {
  
  private _enrollmentRepository: IEnrollmentRepository;

  constructor(enrollmentRepository: IEnrollmentRepository) {
    this._enrollmentRepository = enrollmentRepository;
  }

  async getAllEnrollments(
    page: number, 
    size: number, 
    filter?: any, 
    sort?: any
  ): Promise<Paginated<Enrollments>> {
    //return await this._enrollmentRepository.findMany(page, size, filter);
    return await Paginate<Enrollments>("enrollment", page, size, filter, sort);
  }

  async getEnrollmentById(id: string): Promise<Enrollments | null> {
    return await this._enrollmentRepository.findById(id);
  }

  async getEnrollmentByName(name: string): Promise<Enrollments | null> {
    throw new Error("Method not implemented.");
  }

  async create(createDto: Enrollments): Promise<Enrollments> {
    return await this._enrollmentRepository.create(createDto);
  }

  async update(id: string, updateDto: Partial<Enrollments>): Promise<Enrollments | null> {
    return await this._enrollmentRepository.update(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    await this._enrollmentRepository.delete(id);
  }
}