import { hashPassword } from "../../../shared/utils";
import generatePassword from "../../../shared/utils/generatePassword.utils";
import { RoleRepository } from "../../role/repositories/role.repository";
import { RegisterUserDto } from "../dtos/create.dto";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
  constructor (private readonly userRepository: UserRepository, private readonly roleRepository:RoleRepository){}

  async createUser(dto:RegisterUserDto) {
    const existingRole = await this.roleRepository.findById(dto.roleId);
    if(!existingRole)
      throw Error("Role does not exists");
    const existingEmail = await this.userRepository.findUserByEmail(dto.email);
    if(existingEmail)
      throw Error("Email already in use");
    const existingDni = await this.userRepository.findUserByDni(dto.dni);
    if(existingDni)
      throw Error("DNI already registered"); 

    const generatedPassword = generatePassword();
    const password = await hashPassword(generatedPassword);

    const newUser = await this.userRepository.createUser({ ...dto, password });
    return { ...newUser, password: generatedPassword };
  }
}