import { Router } from "express";
import { GradeController } from "../controllers/Grade.controller";
import { GradeRepository } from "../repositories/Grade.repository";
import { GradeService } from "../services/Grade.service";

const router = Router();

const gradeRepository = new GradeRepository();
const gradeService = new GradeService(gradeRepository);
const gradeController = new GradeController(gradeService);

router.get("/", (req, res) => gradeController.getAllGrades(req, res));
router.get("/:id", (req, res) => gradeController.getGradeById(req, res));
router.post("/", (req, res) => gradeController.createGrade(req, res));
router.put("/:id", (req, res) => gradeController.updateGrade(req, res));
router.delete("/:id", (req, res) => gradeController.deleteGrade(req, res));

export { router as gradeRouter };
