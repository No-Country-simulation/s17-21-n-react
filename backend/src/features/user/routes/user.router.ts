import { Router, Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import prisma from "../../../infrastructure/database/prisma";
import { UserService } from "../services/user.service";
import { UserController } from "../controllers/user.controller";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";
import { RoleRepository } from "../../role/repositories/role.repository";

const userRouter = Router();

const userRepo = new UserRepository(prisma);
const roleRepo = new RoleRepository(prisma);
const userService = new UserService(userRepo, roleRepo);
const userController = new UserController(userService);

userRouter.post(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => userController.registerNewUser(req, res)
);

export { userRouter };