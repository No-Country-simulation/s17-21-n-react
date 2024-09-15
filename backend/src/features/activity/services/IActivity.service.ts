import { Paginated } from "../../../shared/interfaces/Paginated";
import { Activity } from "../entities/activity.entity";

export interface IActivityService {
  getAllActivities(
    page: number,
    size: number,
    filter?: Record<string, any>,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<Activity>>;
  getActivityById(id: string): Promise<Activity | null>;
  create(createDto: Activity): Promise<Activity>;
  //delete(id: string): Promise<void>;
}