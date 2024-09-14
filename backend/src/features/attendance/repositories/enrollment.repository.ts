import { PrismaClient } from "@prisma/client";

export class EnrollmentRepository {
  constructor(private prisma: PrismaClient) {}

  async findWithStudents(data: Record<string, any>, select?: Record<string, any>) {
    return this.prisma.enrollment.findMany({
      select,
      where: { ...data, student: { isActive: true } }
    });
  }
}