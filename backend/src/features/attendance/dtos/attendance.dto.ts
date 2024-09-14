export interface CreateAttendanceDto {
  classId    : string;
  eventDate  : Date;
  status     : string;
}

export interface UpdateAttendanceDto {
  status: string;
}

export interface FindFirstAttendanceDto {
  classId    : string;
  eventDate  : Date;
}

export interface GetSertAttendanceDto {
  classId    : string;
  eventDate  : string;
}