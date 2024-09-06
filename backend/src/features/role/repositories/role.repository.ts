import { PrismaClient } from "@prisma/client";
import { RegisterRolDto } from "../dtos/create.dto";
import { Role } from "../entities/role.entity";

export class RoleRepository {
  constructor(private prisma: PrismaClient) {}

  async create(roleData: RegisterRolDto): Promise<Role> {
    return this.prisma.role.create({ data: roleData });
  }

  async findByName(roleName: string): Promise< Role | null > {
    return this.prisma.role.findFirst({ where: { name: roleName } });
  }

  async findAll(){
    return this.prisma.role.findMany();
  }

  async findById(roleId:string){
    return this.prisma.role.findUnique({ where: { id: roleId } });
  }
}