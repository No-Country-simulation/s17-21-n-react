import { PrismaClient } from "@prisma/client";
import { ReturnAttendance } from "../entities";
import { getSelectKeys } from "../../../shared/utils";
import { CreateAttendanceDto, FindFirstAttendanceDto, UpdateAttendanceDto } from "../dtos";

const keys: Array<keyof ReturnAttendance> = [ "id", "classId", "eventDate", "status" ];

const select = getSelectKeys(keys);

export class AttendanceRepository {
  constructor(private prisma: PrismaClient) {}
  
  async create(data: CreateAttendanceDto): Promise<ReturnAttendance> {
    return this.prisma.attendance.create({ data });
  }

  async update(id: string, data: UpdateAttendanceDto): Promise<ReturnAttendance> {
    return this.prisma.attendance.update({
      data, select, where: { id }
    });
  }

  async findFirst(data: FindFirstAttendanceDto): Promise<ReturnAttendance | null> {
    return this.prisma.attendance.findFirst({
      select, where: { ...data, isDeleted: false }
    });
  }
}
