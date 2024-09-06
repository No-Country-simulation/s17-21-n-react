import { PrismaClient } from "@prisma/client";
import { CreateUserDto } from "../dtos/create.dto";

export class UserRepository {
  constructor(private prisma: PrismaClient) {}

  async createUser(createDto: CreateUserDto){
    return this.prisma.user.create({ data: createDto });
  }

  async findUserByEmail(userEmail:string){
    return this.prisma.user.findUnique({ where: { email: userEmail } });
  }

  async findUserByDni(userDni:string){
    return this.prisma.user.findFirst({ where: { dni: userDni } });
  }

  
}