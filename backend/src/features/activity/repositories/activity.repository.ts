import { Activity } from "@prisma/client";
import { IActivityRepository } from "./Iactivity.repository";
import prisma from "../../../infrastructure/database/prisma";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";

export class ActivityRepository implements IActivityRepository {
  async findMany(skip: number, take: number): Promise<Activity[]> {
    try {
      return await prisma.activity.findMany({
        skip,
        take
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findById(id: string): Promise<Activity | null> {
    try {
      return await prisma.activity.findUnique({ where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async create(activityData: Activity): Promise<Activity> {
    try {
      return await prisma.activity.create({ data: activityData });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  /*async delete(id: string): Promise<Activity> {
    try {
      return await prisma.activity.update({
        data : { isDeleted: true },
        where: { id },
      });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }*/

  async count(): Promise<number> {
    try {
      return await prisma.activity.count();
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
