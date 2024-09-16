import { Paginated } from "../../../shared/interfaces/Paginated";
import { Activity } from "../entities/activity.entity";
import { IActivityService } from "./IActivity.service";
import { Paginate } from "../../../shared/utils";
import { IActivityRepository } from "../repositories/Iactivity.repository";

export class ActivityService implements IActivityService {
  private readonly _activityRepository: IActivityRepository;

  constructor(activityRepository: IActivityRepository) {
    this._activityRepository = activityRepository;
  }

  async getAllActivities(
    page: number,
    size: number,
    filter?: Record<string, any>,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<Activity>> {
    return await Paginate<Activity>("activity", page, size, filter, sort);
  }

  async getActivityById(id: string): Promise<Activity | null> {
    return await this._activityRepository.findById(id);
  }

  async create(createDto: Activity): Promise<Activity> {
    return await this._activityRepository.create(createDto);
  }

  /*async delete(id: string): Promise<void> {
    await this._activityRepository.delete(id);
  }*/
}
