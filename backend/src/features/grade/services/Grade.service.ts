import { Paginated } from "../../../shared/interfaces/Paginated";
import { ErrorHandler, Paginate } from "../../../shared/utils";
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
    filter?: Record<string, any>,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<Grade> | null> {
    try {
      return await Paginate<Grade>("grade", page, size, filter, sort);
    } catch (error) {
      ErrorHandler.handleError(error, "No se pudieron obtener los grados educativos");
    }
  }

  async getGradeById(id: string): Promise<Grade> {
    const grade = await this._gradeRepository.findById(id);
    if (!grade) throw new Error("Grado educativo no encontrado");
    return grade;
  }

  async create(data: Partial<Grade>): Promise<Grade> {
    if (!data || Object.keys(data).length === 0) 
      throw new Error(
        "Los datos para crear el grado educativo no pueden estar vacíos"
      );
    
    try {
      return await this._gradeRepository.create(data as Grade);
    } catch (error) {
      ErrorHandler.handleError(error, "No se pudo crear el grado educativo");
    }
  }

  async update(id: string, data: Partial<Grade>): Promise<Grade> {
    if (!data || Object.keys(data).length === 0) 
      throw new Error(
        "Los datos para actualizar el grado educativo no pueden estar vacíos"
      );
    
    try {
      const updatedGrade = await this._gradeRepository.update(id, data);
      if (!updatedGrade) throw new Error("Grado educativo no encontrado");
      return updatedGrade;
    } catch (error) {
      ErrorHandler.handleError(error, "No se pudo actualizar el grado educativo");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this._gradeRepository.delete(id);
    } catch (error) {
      ErrorHandler.handleError(error, "No se pudo eliminar el grado educativo");
    }
  }
}
