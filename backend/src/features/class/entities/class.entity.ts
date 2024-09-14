import { Activity } from "@prisma/client";

export interface Classes {
  id: string;
  name: string;
  date: Date;
  subjectId: string;
  yearId: string;
  activities?: Activity[];
  isDeleted: boolean;
}
