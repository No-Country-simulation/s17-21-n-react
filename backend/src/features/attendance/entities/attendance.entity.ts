export interface ReturnAttendance {
  id         : string;
  classId    : string;
  eventDate  : Date;
  status     : string;
}

export interface Attendance extends ReturnAttendance {
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum AttendanceStatusEnum {
  Pending = "PENDING",
  Finished = "FINISHED",
}