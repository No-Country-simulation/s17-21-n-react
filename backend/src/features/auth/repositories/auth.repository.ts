/* eslint-disable indent */
import { PrismaClient } from "@prisma/client";
import { User } from "../entities/user.entity";
import { RegisterDto } from "../dtos/register.dto";

export class AuthRepository {
    constructor(private prisma: PrismaClient) {}
    
    async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async create(userData: RegisterDto): Promise<User> {
        return this.prisma.user.create({ data: userData });
    }
}