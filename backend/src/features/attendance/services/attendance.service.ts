import { RequiredKeys } from "@prisma/client/runtime/library";
import { AttendanceRepository, AttendanceStudentRepository, EnrollmentRepository, ClassRepository } from "../repositories";
import { formatDate, validateRequiredKeys } from "../../../shared/utils";
import { CreateAttendanceStudentDto, GetSertAttendanceDto, UpdateAttendanceDto } from "../dtos";
import { AttendanceStatusEnum, AttendanceStudentStatusEnum, ReturnAttendance, ReturnAttendanceStudent } from "../entities";

export class AttendanceService {
  constructor(
    private attendanceRepository: AttendanceRepository,
    private attendanceStudentRepository: AttendanceStudentRepository,
    private classRepository: ClassRepository,
    private enrollmentRepository: EnrollmentRepository
  ) { }
  
  parsedAttendance(attendance: ReturnAttendance, attendanceStudents: ReturnAttendanceStudent[]) {
    return {
      ...attendance,
      attendanceStudents
    };
  }

  async getSert (data: GetSertAttendanceDto) {
    const keys: RequiredKeys<GetSertAttendanceDto>[] = [
      "eventDate",
      "classId"
    ];
    
    validateRequiredKeys(data, keys);

    const { classId, eventDate } = data;

    const dateParsed = formatDate(eventDate);
    dateParsed.setHours(0, 0, 0, 0);

    let attendance = await this.attendanceRepository.findFirst({
      classId,
      eventDate: dateParsed
    });

    let attendanceStudents = [];

    if (attendance) {
      attendanceStudents = await this.attendanceStudentRepository.findMany(attendance.id);

      return this.parsedAttendance(attendance, attendanceStudents);
    }
    
    attendance = await this.attendanceRepository.create({
      classId,
      eventDate: dateParsed,
      status   : AttendanceStatusEnum.Doing
    });

    const firstClass = await this.classRepository.findFirst(classId);

    if (!firstClass) throw new Error("class not found");

    const enrollments = await this.enrollmentRepository.findWithStudents(
      {
        subjectId: firstClass.subjectId,
        yearId   : firstClass.yearId
      },
      { studentId: true }
    );

    const newAttendanceStudents: CreateAttendanceStudentDto[] = enrollments.map(({ studentId }) => ({
      attendanceId: attendance.id,
      observation : "",
      status      : AttendanceStudentStatusEnum.Absent,
      studentId
    }));

    attendanceStudents = await this.attendanceStudentRepository.createMany(newAttendanceStudents);
    
    return this.parsedAttendance(attendance, attendanceStudents);

  }

  async update(id: string, data: UpdateAttendanceDto) {
    const keys: RequiredKeys<UpdateAttendanceDto>[] = [ "status" ];
    
    validateRequiredKeys(data, keys);

    return await this.attendanceRepository.update(id, data);
  }
}