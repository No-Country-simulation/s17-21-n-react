import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { LoginDto } from "../dtos/login.dto";
import { RegisterAdminDto } from "../dtos/register.dto";
import { errorResponse, successResponse } from "../../../shared/utils";
import { HttpCodes } from "../../../shared/utils/HTTPCode.utils";

export class AuthController {
  constructor(private authService: AuthService) {}


  /**
   * @swagger
   * /api/auth/login:
   *   post:
   *     summary: Inicio de sesión de usuario
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *                 format: email
   *               password:
   *                 type: string
   *                 pattern: ^(?=.*[A-Z])(?=.*[a-z]).{5,8}$
   *     responses:
   *       200:
   *         description: Login successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 user:
   *                   type: object
   *                   properties:
   *                     id:
   *                       type: string
   *                     email:
   *                       type: string
   *                     dni:
   *                       type: string
   *                 token:
   *                   type: string
   *       400:
   *         description: Invalid credentials
   */
  async login(req: Request, res: Response) {
    try {
      const loginDto: LoginDto = req.body;
      const result = await this.authService.login(loginDto);
      successResponse({ data: result, message: "Login successfully", res, status: HttpCodes.SUCCESS });

    } catch (error: any) {
      console.error(error);
      errorResponse({ message: "Error login user", res, status: HttpCodes.BAD_REQUEST });
    }
  }

  /**
   * @swagger
   * /api/auth/register:
   *   post:
   *     summary: Crear usuarios
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *               - dni
   *             properties:
   *               email:
   *                 type: string
   *                 format: email
   *               password:
   *                 type: string
   *               dni:
   *                 type: string
   *     responses:
   *       200:
   *         description: User created successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 user:
   *                   type: object
   *                   properties:
   *                     id:
   *                       type: integer
   *                     email:
   *                       type: string
   *                     dni:
   *                       type: string
   *                 token:
   *                   type: string
   *       400:
   *         description: Invalid credentials
   */
  async register(req: Request, res: Response) {
    try {
      const registerDto: RegisterAdminDto = req.body;
      const result = await this.authService.registerAdmin(registerDto);
      successResponse({ data: result, message: "Admin user created successfully", res, status: HttpCodes.SUCCESS_CREATED });
    } catch (error: any) {
      console.error(error);
      errorResponse({ message: "Failed to create user", res, status: HttpCodes.BAD_REQUEST });
    }
  }
}