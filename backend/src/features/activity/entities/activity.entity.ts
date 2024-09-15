import { ActivityStatus, ActivityType } from "../../../shared/constants";

export interface Activity {
  id: string;
  name: string;
  description?: string;
  activityType: ActivityType;
  status: ActivityStatus;
  startDate?: Date;
  dueDate: Date;
  classId: string;
}