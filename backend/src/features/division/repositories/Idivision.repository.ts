import { Division } from "@prisma/client";

export interface IDivisionRepository {
  findMany(skip: number, take: number): Promise<Division[]>;
  findById(id: string): Promise<Division | null>;
  create(divisionData: Division): Promise<Division>;
  //delete(id: string): Promise<Division>;
  count(): Promise<number>;
}