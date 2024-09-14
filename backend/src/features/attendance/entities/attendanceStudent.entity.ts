export interface ReturnAttendanceStudent {
  id          : string;
  studentId   : string;
  attendanceId: string;
  student: {
    name    : string;
    lastName: string;
    email   : string;
  };
  observation: string | null;
  status     : string;
}

export interface AttendanceStudent extends ReturnAttendanceStudent {
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum AttendanceStudentStatusEnum {
  Absent = "ABSENT",
  Present = "PRESENT",
  Late = "LATE",
}
