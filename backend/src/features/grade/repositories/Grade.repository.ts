import { Grade } from "@prisma/client";
import { Paginated } from "../../../shared/interfaces/Paginated";
import { IGradeRepository } from "./IGrade.repository";

export class GradeRepository implements IGradeRepository {
    findMany(skip: number, take: number): Promise<Paginated<Grade>> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Grade | null> {
        throw new Error("Method not implemented.");
    }
    create(grade: Grade): Promise<Grade> {
        throw new Error("Method not implemented.");
    }
    update(id: string, grade: Grade): Promise<Grade | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    count(): Promise<number> {
        throw new Error("Method not implemented.");
    }
}