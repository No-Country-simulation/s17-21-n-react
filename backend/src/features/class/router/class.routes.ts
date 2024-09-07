import { Router } from "express";
import { ClassController } from "../controllers/class.controller";
import { ClassRepository } from "../repositories/class.repository";
import { ClassService } from "../services/Class.service";

const router = Router();

const classRepository = new ClassRepository();
const classService = new ClassService(classRepository);
const classController = new ClassController(classService);

router.get("/", (req, res) => classController.getAllClasses(req, res));
router.get("/:id", (req, res) => classController.getClassById(req, res));
router.post("/", (req, res) => classController.createClass(req, res));
router.put("/:id", (req, res) => classController.updateClass(req, res));
router.delete("/:id", (req, res) => classController.deleteClass(req, res));


export { router as classRouter };
