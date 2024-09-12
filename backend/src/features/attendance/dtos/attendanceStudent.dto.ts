export interface CreateAttendanceStudentDto {
  studentId   : string;
  attendanceId: string;
  observation : string;
  status      : string;
}

export interface UpdateAttendanceStudentDto {
  observation: string;
  status     : string;
}


