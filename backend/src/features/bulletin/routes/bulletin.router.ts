import { Router } from "express";
import prisma from "../../../infrastructure/database/prisma";
import { BulletinRepository } from "../repositories";
import { BulletinService } from "../services";
import { BulletinController } from "../controllers";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const bulletinRepository = new BulletinRepository(prisma);
const bulletinService = new BulletinService(bulletinRepository);
const bulletinController = new BulletinController(bulletinService);

router.post(
  "/",
  authMiddleware,
  roleMiddleware([ "ADMIN" ]),
  (req, res) => bulletinController.create(req, res)
);
router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware([ "ADMIN" ]),
  (req, res) => bulletinController.update(req, res)
);
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware([ "ADMIN" ]),
  (req, res) => bulletinController.delete(req, res)
);
router.get("/all", (req, res) => bulletinController.findMany(req, res));
router.get("/:id", (req, res) => bulletinController.findUnique(req, res));

export { router as bulletinRouter };