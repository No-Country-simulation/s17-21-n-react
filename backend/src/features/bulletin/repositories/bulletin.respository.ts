import { PrismaClient } from "@prisma/client";
import { CreateBulletinDto, FindManyBulletinDto, UpdateBulletinDto } from "../dtos/bulletin.dto";
import { getPaginateOptions, } from "../../../shared/utils/paginate";
import { SystemScopes } from "../../../shared/constants";
import { Bulletin } from "../entities";

export class BulletinRepository {
  constructor(private prisma: PrismaClient) {}
  
  async create(data: CreateBulletinDto): Promise<Bulletin> {
    return this.prisma.bulletin.create({ data });
  }

  async update(id: string, data: UpdateBulletinDto): Promise<Bulletin> {
    return this.prisma.bulletin.update({ data, where: { id } });
  }

  async delete(id: string): Promise<Bulletin>  {
    return this.prisma.bulletin.update({
      data: {
        deletedAt: new Date(),
        isActived: false,
        isDeleted: false
      },
      where: { id }
    });
  }

  async findUnique(id: string): Promise<Bulletin | null> {
    return this.prisma.bulletin.findUnique({
      where: { deletedAt: null, id, isActived: true, }
    });
  }

  async findMany(data: FindManyBulletinDto): Promise<Bulletin[]> {
    const { limit, page, orderBy, sort, scope = SystemScopes.ALL } = data;

    const options = getPaginateOptions({ limit, orderBy, page, sort });

    return this.prisma.bulletin.findMany({
      where: { deletedAt: null, isActived: true, scope },
      ...options
    });
  }
}
