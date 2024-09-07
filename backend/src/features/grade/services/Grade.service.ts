import { Paginated } from "../../../shared/interfaces/Paginated";
import { Grade } from "../entities/Grade.entity";
import { IGradeRepository } from "../repositories/IGrade.repository";
import { IGradeService } from "./IGrade.service";

export class GradeService implements IGradeService{

    private readonly _gradeRepository: IGradeRepository;

    constructor(gradeRepository: IGradeRepository) {
        this._gradeRepository = gradeRepository;
    }

    getAllGrades(page: number, size: number, filter?: any, sort?: any): Promise<Paginated<Grade> | null> {
        throw new Error("Method not implemented.");
    }
    getGradeById(id: string): Promise<Grade | null> {
        throw new Error("Method not implemented.");
    }
    create(data: Grade): Promise<Grade | null> {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: Partial<Grade>): Promise<Grade | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}