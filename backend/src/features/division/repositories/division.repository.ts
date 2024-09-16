import { Division } from "@prisma/client";
import { IDivisionRepository } from "./Idivision.repository";
import prisma from "../../../infrastructure/database/prisma";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";

export class DivisionRepository implements IDivisionRepository {
  async findMany(skip: number, take: number): Promise<Division[]> {
    try {
      return await prisma.division.findMany({
        skip,
        take
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findById(id: string): Promise<Division | null> {
    try {
      return await prisma.division.findUnique({ where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async create(divisionData: Division): Promise<Division> {
    try {
      return await prisma.division.create({ data: divisionData });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  /*async delete(id: string): Promise<Division> {
    try {
      return await prisma.division.update({
        data : { isDeleted: true },
        where: { id },
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }*/

  async count(): Promise<number> {
    try {
      return await prisma.division.count();
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
