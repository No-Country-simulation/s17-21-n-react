import { Prisma, PrismaClient } from "@prisma/client";
import { CreateUserDto } from "../dtos/create.dto";
import { User } from "../entities/user.entity";
import { UpdateUserDto } from "../dtos/update.dto";
import { FilterUsers, PaginateOptionsArgs } from "../dtos/select.dto";

export class UserRepository {
  constructor(private prisma: PrismaClient) {}

  async createUser(createDto: CreateUserDto) {
    return this.prisma.user.create({ data: createDto });
  }

  async findUserByEmail(userEmail: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email: userEmail } });
  }

  async findUserByDni(userDni: string): Promise<User | null> {
    return this.prisma.user.findFirst({ where: { dni: userDni } });
  }

  async findUserById(userId: string, isActive?:boolean): Promise<User | null> {
    const whereClause:Prisma.UserWhereInput={ id: userId };
    if(typeof isActive === "boolean")
      whereClause.isActive = isActive;
    return this.prisma.user.findFirst({ include: { role: { select: { name: true } } }, where: whereClause });
  }

  async updateUser(userId: string, data: UpdateUserDto): Promise<User | null> {
    return this.prisma.user.update({ data, where: { id: userId } });
  }

  async findUsersAndCount(filters: FilterUsers) {
    const pagOptions = filters.pagOptions ? filters.pagOptions : { limit: 15, page: 1 };
    const whereClause: Prisma.UserWhereInput = {};
    if (filters.role) whereClause.role = { name: filters.role };

    if (typeof filters.isActive === "boolean") whereClause.isActive = filters.isActive;

    if (filters.searchParam)
      whereClause.OR = [
        {
          name: {
            contains: filters.searchParam,
            mode    : "insensitive",
          },
        },
        {
          lastName: {
            contains: filters.searchParam,
            mode    : "insensitive",
          },
        },
        {
          email: {
            contains: filters.searchParam,
            mode    : "insensitive",
          },
        },
        {
          dni: {
            contains: filters.searchParam,
            mode    : "insensitive",
          },
        },
      ];

    const count = await this.prisma.user.count({ where: whereClause });
    const pag = paginate<User>(pagOptions);
    const data = await this.prisma.user.findMany({
      include: { role: { select: { name: true } } },
      where  : whereClause,
      ...pag
    });
    return { count, data };
  }

  async countAllUsers() {
    return this.prisma.user.count();
  }
}

const paginate = <U>({ page=1, limit=15, orderBy, sort }:PaginateOptionsArgs<U>) => {
  const currentPage = Number.isNaN(page) || page < 1 ? 1 : page;
  const take = Number.isNaN(limit) ? 15 : limit;
  const skip = (currentPage - 1) * take;
  const order = orderBy ? { [orderBy as string]: sort } : undefined;

  return { orderBy: order, skip, take };

};