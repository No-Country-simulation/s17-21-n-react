import { PrismaClient } from "@prisma/client";
import { CreateBulletinDto, FindManyBulletinDto, UpdateBulletinDto } from "../dtos/bulletin.dto";
import { getPaginateOptions, } from "../../../shared/utils/paginate";
import { SystemScopes } from "../../../shared/constants";
import { ReturnBulletin } from "../entities";
import { getSelectKeys } from "../../../shared/utils";


const keys: Array<keyof ReturnBulletin> = [ "id", "title", "description", "eventDate", "scope", "isActived" ];

const select = getSelectKeys(keys);

export class BulletinRepository {
  constructor(private prisma: PrismaClient) {}
  
  async create(data: CreateBulletinDto): Promise<ReturnBulletin> {
    return this.prisma.bulletin.create({ data });
  }

  async update(id: string, data: UpdateBulletinDto): Promise<ReturnBulletin> {
    return this.prisma.bulletin.update({
      data, select, where: { id }
    });
  }

  async delete(id: string): Promise<ReturnBulletin>  {
    return this.prisma.bulletin.update({
      data: {
        deletedAt: new Date(),
        isActived: false,
        isDeleted: false
      },
      select,
      where: { id }
    });
  }

  async findUnique(id: string): Promise<ReturnBulletin | null> {
    return this.prisma.bulletin.findUnique({
      select, where: { deletedAt: null, id, isActived: true, }
    });
  }

  async findMany(data: FindManyBulletinDto): Promise<ReturnBulletin[]> {
    const { limit, page, orderBy, sort, scope = SystemScopes.ALL } = data;

    const options = getPaginateOptions({ limit, orderBy, page, sort });

    return this.prisma.bulletin.findMany({
      where: { deletedAt: null, isActived: true, scope },
      ...options,
      select
    });
  }
}
