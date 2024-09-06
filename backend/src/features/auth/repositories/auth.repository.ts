import { PrismaClient } from "@prisma/client";
import { User } from "../entities/user.entity";
import { RegisterAdminDto } from "../dtos/register.dto";

export class AuthRepository {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      include: { role: { select: { name: true } } },
      where  : { email },
    });
  }

  async create(userData: RegisterAdminDto): Promise<User> {
    return this.prisma.user.create({
      data: userData,
    });
  }
}
