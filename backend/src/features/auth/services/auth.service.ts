/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthRepository } from "../repositories/auth.repository";
import { RoleRepository } from "../repositories/role.repository";
import { LoginDto } from "../dtos/login.dto";
import { RegisterAdminDto } from "../dtos/register.dto";
import { jwtConfig } from "../../../shared/utils/jwt.util";

export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private roleRepository: RoleRepository
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.authRepository.findByEmail(loginDto.email);
    if (!user) throw new Error("User not found");
    
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isPasswordValid) throw new Error("Invalid password");

    const token = jwt.sign({ userId: user.id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
    return { user, token };
  }

  async registerAdmin(registerDto: RegisterAdminDto) {
    const existingUser = await this.authRepository.findByEmail(registerDto.email);
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const existingRole = await this.roleRepository.findFirst("ADMIN");
    let roleId: string = "";

    if (!existingRole) {
      const role = await this.roleRepository.create({
        name: "ADMIN",
      });
      roleId = role.id;
    } else 
      roleId = existingRole.id;
    
    const user = await this.authRepository.create({
      email: registerDto.email,
      password: hashedPassword,
      roleId: roleId,
    });

    const token = jwt.sign({ userId: user.id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
    return { user, token };
  }
}