import { Router, Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import prisma from "../../../infrastructure/database/prisma";
import { UserService } from "../services/user.service";
import { UserController } from "../controllers/user.controller";
import {
  authMiddleware,
  roleMiddleware,
  validateMidlleware,
} from "../../../shared/middlewares";
import { RoleRepository } from "../../role/repositories/role.repository";
import { SystemBaseRoles } from "../../../shared/constants";
import {
  getUserQuerySchema,
  registerUserSchema,
  updateEmailSchema,
  updateUserSchema,
} from "../validations";

const userRouter = Router();

const userRepo = new UserRepository(prisma);
const roleRepo = new RoleRepository(prisma);
const userService = new UserService(userRepo, roleRepo);
const userController = new UserController(userService);

userRouter.post(
  "/",
  [
    authMiddleware,
    roleMiddleware([ "ADMIN" ]),
    validateMidlleware({ bodySchema: registerUserSchema }),
  ],
  (req: Request, res: Response) => userController.registerNewUser(req, res)
);

userRouter.get(
  "/",
  [
    authMiddleware,
    roleMiddleware([ SystemBaseRoles.ADMIN ]),
    validateMidlleware({ querySchema: getUserQuerySchema }),
  ],
  (req: Request, res: Response) => userController.getUsers(req, res)
);

userRouter.get("/profile", [ authMiddleware ], (req: Request, res: Response) =>
  userController.getUserProfile(req, res) );

userRouter.patch("/password", [ authMiddleware ], (req: Request, res: Response) =>
  userController.updatePassword(req, res)
);

userRouter.patch(
  "/email",
  [ authMiddleware, validateMidlleware({ bodySchema: updateEmailSchema }) ],
  (req: Request, res: Response) => userController.updateEmail(req, res)
);

userRouter.patch(
  "/:userId",
  [
    authMiddleware,
    roleMiddleware([ SystemBaseRoles.ADMIN ]),
    validateMidlleware({ bodySchema: updateUserSchema }),
  ],
  (req: Request, res: Response) => userController.updateUser(req, res)
);

userRouter.delete("/:userId", [ authMiddleware, roleMiddleware([ "ADMIN" ]) ], (req: Request, res: Response) =>
  userController.softDeleteUser(req, res)
);

userRouter.get("/:userId", [ authMiddleware, roleMiddleware([ "ADMIN" ]) ], (req: Request, res: Response) =>
  userController.getUserById(req, res)
);

export { userRouter };
