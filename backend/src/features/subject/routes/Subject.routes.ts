import { Router } from "express";
import { SubjectRepository } from "../repositories/Subject.repository";
import { SubjectService } from "../services/Subject.service";
import { SubjectController } from "../controllers/Subject.controller";

const router = Router();

const subjectRepository = new SubjectRepository();
const subjectService = new SubjectService(subjectRepository);
const subjectController = new SubjectController(subjectService);

router.get("/", (req, res) => subjectController.getAllSubjects(req, res));
router.get("/:id", (req, res) => subjectController.getSubjectById(req, res));
router.post("/", (req, res) => subjectController.createSubject(req, res));
router.put("/:id", (req, res) => subjectController.update(req, res));
router.delete("/:id", (req, res) => subjectController.delete(req, res));

export { router as subjectRouter };
