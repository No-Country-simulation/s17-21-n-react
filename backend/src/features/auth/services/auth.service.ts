import { AuthRepository } from "../repositories/auth.repository";
import { RoleRepository } from "../repositories/role.repository";
import { LoginDto } from "../dtos/login.dto";
import { RegisterAdminDto } from "../dtos/register.dto";
import {
  comparePassword,
  generateJWT,
  hashPassword,
} from "../../../shared/utils";
import { SystemRoles } from "../../../shared/constants";

export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private roleRepository: RoleRepository
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.authRepository.findByEmail(loginDto.email);
    if (!user) throw new Error("User not found");

    const isPasswordValid = await comparePassword(
      loginDto.password,
      user.password
    );
    if (!isPasswordValid) throw new Error("Invalid password");

    const { id, email, name, last_name, roleId } = user;

    const token = generateJWT({ userId: user.id });
    return { token, user: { email, id, last_name, name, roleId } };
  }

  async registerAdmin(registerDto: RegisterAdminDto) {
    const existingUser = await this.authRepository.findByEmail(
      registerDto.email
    );
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await hashPassword(registerDto.password);

    const existingRole = await this.roleRepository.findFirst("ADMIN");
    let roleId: string = "";

    if (!existingRole) {
      const role = await this.roleRepository.create({
        name: SystemRoles.ADMIN,
      });
      roleId = role.id;
    } else
      roleId = existingRole.id;

    const user = await this.authRepository.create({
      ...registerDto,
      email   : registerDto.email,
      password: hashedPassword,
      roleId  : roleId,
    });

    const token = generateJWT({ userId: user.id });
    return { token, user };
  }
}
