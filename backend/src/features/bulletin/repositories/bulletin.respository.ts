import { PrismaClient } from "@prisma/client";
import { CreateBulletinDto, FindManyBulletinDto, UpdateBulletinDto } from "../dtos/bulletin.dto";
import { Paginate } from "../../../shared/utils/paginate";
import { SystemScopes } from "../../../shared/constants";
import { ReturnBulletin } from "../entities";
import { getSelectKeys } from "../../../shared/utils";
import { Paginated } from "../../../shared/interfaces/Paginated";


const keys: Array<keyof ReturnBulletin> = [ "id", "title", "description", "eventDate", "scope", "isActivated" ];

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
        deletedAt  : new Date(),
        isActivated: false,
        isDeleted  : true
      },
      select,
      where: { id }
    });
  }

  async findUnique(id: string): Promise<ReturnBulletin | null> {
    return this.prisma.bulletin.findUnique({
      select, where: { deletedAt: null, id, isActivated: true, }
    });
  }

  async findMany(data: FindManyBulletinDto): Promise<Paginated<ReturnBulletin>> {
    const { limit, page, sort, orderBy, scope = SystemScopes.ALL } = data;

    return await Paginate<ReturnBulletin>("bulletin", Number(page), Number(limit), 
      { deletedAt: null, isActivated: true, scope },
      ...orderBy ? [ { [orderBy]: sort! } ] : []
    );
  }
}
