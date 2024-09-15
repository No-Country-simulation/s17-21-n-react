import { Activity } from "@prisma/client";

export interface IActivityRepository {
  findMany(skip: number, take: number): Promise<Activity[]>;
  findById(id: string): Promise<Activity | null>;
  create(activityData: Activity): Promise<Activity>;
  //delete(id: string): Promise<Activity>;
  count(): Promise<number>;
}