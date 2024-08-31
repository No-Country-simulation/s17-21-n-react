/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthRepository } from "../repositories/auth.repository";
import { LoginDto } from "../dtos/login.dto";
import { RegisterDto } from "../dtos/register.dto";
import { jwtConfig } from "../../../shared/utils/jwt.util";

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async login(loginDto: LoginDto) {
    const user = await this.authRepository.findByEmail(loginDto.email);
    if (!user) throw new Error("User not found");
    
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isPasswordValid) throw new Error("Invalid password");

    const token = jwt.sign({ userId: user.id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
    return { user, token };
  }

  async register(registerDto: RegisterDto) {
    const existingUser = await this.authRepository.findByEmail(registerDto.email);
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const user = await this.authRepository.create({
      ...registerDto,
      password: hashedPassword,
      //roleId: "",
    });

    const token = jwt.sign({ userId: user.id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
    return { user, token };
  }
}