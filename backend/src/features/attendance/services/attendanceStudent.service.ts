import { RequiredKeys } from "@prisma/client/runtime/library";
import { AttendanceStudentRepository } from "../repositories";
import { validateRequiredKeys } from "../../../shared/utils";
import { UpdateAttendanceStudentDto } from "../dtos";
import { ReturnAttendance, ReturnAttendanceStudent } from "../entities";

export class AttendanceStudentService {
  constructor(
    private attendanceStudentRepository: AttendanceStudentRepository
  ) { }
  
  parsedAttendance(attendance: ReturnAttendance, attendanceStudents: ReturnAttendanceStudent[]) {
    return {
      ...attendance,
      attendanceStudents
    };
  }

  async update(id: string, data: UpdateAttendanceStudentDto) {
    const keys: RequiredKeys<UpdateAttendanceStudentDto>[] = [
      "status",
      "observation"
    ];
    
    validateRequiredKeys(data, keys);

    return await this.attendanceStudentRepository.update(id, data);
  }
}