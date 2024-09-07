import { Router, Request, Response } from "express";
import { RoleRepository } from "../repositories/role.repository";
import prisma from "../../../infrastructure/database/prisma";
import { RoleService } from "../services/role.service";
import { RoleController } from "../controllers/role.controller";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const roleRouter = Router();

const roleRepository = new RoleRepository(prisma);
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService);

roleRouter.post(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => roleController.create(req, res)
);

roleRouter.get(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => roleController.getAll(req, res)
);

export { roleRouter };
