/* eslint-disable indent */
import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { LoginDto } from "../dtos/login.dto";
import { RegisterDto } from "../dtos/register.dto";

export class AuthController {
  constructor(private authService: AuthService) {}

  async login(req: Request, res: Response) {
    try {
        const loginDto: LoginDto = req.body;
        const result = await this.authService.login(loginDto);
        res.json(result);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
  }

  async register(req: Request, res: Response) {
    try {
        const registerDto: RegisterDto = req.body;
        const result = await this.authService.register(registerDto);
        res.json(result);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
  }
}