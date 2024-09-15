import { ActivityStatus, ActivityType } from "../../../shared/constants";

export interface CreateActivityDTO {
  name: string;
  description?: string;
  activityType: ActivityType;
  status: ActivityStatus;
  startDate?: Date;
  dueDate: Date;
  classId: string;
}