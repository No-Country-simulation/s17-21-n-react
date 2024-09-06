import { Router } from "express";
import prisma from "../../../infraestructure/database/prisma";
import { BulletinRepository } from "../repositories";
import { BulletinService } from "../services";
import { BulletinController } from "../controllers";

const router = Router();

const bulletinRepository = new BulletinRepository(prisma);
const bulletinService = new BulletinService(bulletinRepository);
const bulletinController = new BulletinController(bulletinService);

// TODO: agregar middlewares rol ADMIN
router.post("/", (req, res) => bulletinController.create(req, res));
router.patch("/:id", (req, res) => bulletinController.update(req, res));
router.delete("/:id", (req, res) => bulletinController.delete(req, res));

router.get("/all", (req, res) => bulletinController.findMany(req, res));
router.get("/:id", (req, res) => bulletinController.findUnique(req, res));

export { router as bulletinRouter };