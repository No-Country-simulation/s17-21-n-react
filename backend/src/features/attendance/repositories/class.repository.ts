import { PrismaClient } from "@prisma/client";

export class ClassRepository {
  constructor(private prisma: PrismaClient) { }

  async findFirst(id: string) {
    return this.prisma.class.findUnique({ where: { id, isDeleted: false } });
  }
}