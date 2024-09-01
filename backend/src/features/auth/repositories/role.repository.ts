/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable indent */
import { PrismaClient } from "@prisma/client";
import { Role } from "../entities/role.entity";
import { RegisterRolDto } from "../dtos/register.dto";

export class RoleRepository {
    constructor(private prisma: PrismaClient) {}

    async findFirst(name: string): Promise<Role | null> {
        return this.prisma.role.findFirst({
            where: {
              name: name
            },
            select: {
              id: true
            }
          });
    }

    async create(roleData: RegisterRolDto): Promise<Role> {
        return this.prisma.role.create({ data: roleData });
    }
}