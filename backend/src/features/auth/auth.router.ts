import express from "express";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { AuthRepository } from "./repositories/auth.repository";
import prisma from "../../infrastructure/database/prisma";
import { RoleRepository } from "./repositories/role.repository";

const router = express.Router();

const authRepository = new AuthRepository(prisma);
const roleRepository = new RoleRepository(prisma);
const authService = new AuthService(authRepository, roleRepository);
const authController = new AuthController(authService);

router.post("/login", (req, res) => authController.login(req, res));
router.post("/register", (req, res) => authController.register(req, res));

//Siguientes rutas
// router.post("/forgot-password", (req, res) => authController.forgotPassword(req, res));
// router.post("/reset-password", (req, res) => authController.resetPassword(req, res));

export { router as authRouter };