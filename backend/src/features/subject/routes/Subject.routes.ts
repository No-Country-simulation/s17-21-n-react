import { Router, Request, Response } from "express";
import { SubjectRepository } from "../repositories/Subject.repository";
import { SubjectService } from "../services/Subject.service";
import { SubjectController } from "../controllers/Subject.controller";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const subjectRepository = new SubjectRepository();
const subjectService = new SubjectService(subjectRepository);
const subjectController = new SubjectController(subjectService);

router.get(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN", "TEACHER" ]) ],
  (req: Request, res: Response) => subjectController.getAllSubjects(req, res)
);

router.get(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN", "TEACHER" ]) ],
  (req: Request, res: Response) => subjectController.getSubjectById(req, res)
);

router.post(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => subjectController.createSubject(req, res)
);

router.put(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => subjectController.updateSubject(req, res)
);

router.delete(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => subjectController.deleteSubject(req, res)
);

export { router as subjectRouter };
