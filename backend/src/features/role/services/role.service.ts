import { RegisterRolDto } from "../dtos/create.dto";
import { RoleRepository } from "../repositories/role.repository";

export class RoleService {
  constructor (
    private roleRepository : RoleRepository
  ){}

  async createNewRole (createDto: RegisterRolDto) {
    const existingRole = await this.roleRepository.findByName(createDto.name);
    if(existingRole)
      throw Error(`Role ${createDto.name} already exists`);

    return await this.roleRepository.create({ name: createDto.name.toUpperCase() });
  }

  async getAllRoles () {
    return await this.roleRepository.findAll();
  }
}