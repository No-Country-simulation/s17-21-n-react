import { RequiredKeys } from "@prisma/client/runtime/library";
import { BulletinRepository } from "../repositories/bulletin.respository";
import { CreateBulletinDto, FindManyBulletinDto, UpdateBulletinDto } from "../dtos/bulletin.dto";
import { SystemScopes } from "../../../shared/constants";
import { validateRequiredKeys } from "../../../shared/utils";

export class BulletinService {
  constructor(private bulletinRepository: BulletinRepository ) {}
  
  async create(data: CreateBulletinDto) {
    const keys: RequiredKeys<CreateBulletinDto>[] = [
      "description",
      "eventDate",
      "scope",
      "title"
    ];
    
    validateRequiredKeys(data, keys);
    
    if (!Object.values(SystemScopes).includes(data.scope as SystemScopes))
      throw new Error(`scope: ${data.scope} not found`);

    return await this.bulletinRepository.create(data);
  }

  async update(id: string, data: UpdateBulletinDto) {
    if(!Object.keys(data).length) throw new Error("Data to update cannot be empty");

    return await this.bulletinRepository.update(id, data);
  }

  async delete(id: string) {
    await this.bulletinRepository.delete(id);
  }

  async findUnique(id: string) {
    return await this.bulletinRepository.findUnique(id);
  }

  async findMany(data: FindManyBulletinDto) {
    return await this.bulletinRepository.findMany(data);
  }
}