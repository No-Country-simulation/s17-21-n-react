import { PrismaClient } from "@prisma/client";
import { User } from "../../user/entities/user.entity";
import { ReturnAttendanceStudent } from "../entities";
import { getSelectKeys } from "../../../shared/utils";
import { CreateAttendanceStudentDto, UpdateAttendanceStudentDto } from "../dtos";

const keys: Array<keyof ReturnAttendanceStudent> = [ "id", "attendanceId", "observation", "status", "studentId" ];

const keysStudent: Array<keyof User> = [ "name", "lastName", "email" ];

const select = {
  ...getSelectKeys(keys),
  student: {
    select: getSelectKeys(keysStudent)
  }
};

export class AttendanceStudentRepository {
  constructor(private prisma: PrismaClient) {}
  
  async createMany(data: CreateAttendanceStudentDto[]): Promise<ReturnAttendanceStudent[]> {
    return this.prisma.attendanceStudent.createManyAndReturn({
      data,
      select
    });
  }

  async update(id: string, data: UpdateAttendanceStudentDto): Promise<ReturnAttendanceStudent> {
    return this.prisma.attendanceStudent.update({
      data, select, where: { id }
    });
  }

  async findMany(id: string): Promise<ReturnAttendanceStudent[]> {
    return this.prisma.attendanceStudent.findMany({
      select,
      where: { attendanceId: id, isDeleted: false }
    });
  }
}
