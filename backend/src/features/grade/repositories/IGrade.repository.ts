import { Grade } from "@prisma/client";

export interface IGradeRepository {
  findMany(skip: number, take: number): Promise<Grade[]>;
  findById(id: string): Promise<Grade | null>;
  create(grade: Grade): Promise<Grade>;
  update(id: string, grade: Partial<Grade>): Promise<Grade | null>;
  delete(id: string): Promise<void>;
  count(): Promise<number>;
}
