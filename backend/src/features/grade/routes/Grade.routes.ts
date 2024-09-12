import { Router, Request, Response } from "express";
import { GradeController } from "../controllers/Grade.controller";
import { GradeRepository } from "../repositories/Grade.repository";
import { GradeService } from "../services/Grade.service";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const gradeRepository = new GradeRepository();
const gradeService = new GradeService(gradeRepository);
const gradeController = new GradeController(gradeService);

router.get(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN", "TEACHER" ]) ],
  (req: Request, res: Response) => gradeController.getAllGrades(req, res)
);

router.get(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => gradeController.getGradeById(req, res)
);

router.post(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => gradeController.createGrade(req, res)
);

router.put(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => gradeController.updateGrade(req, res)
);

router.delete(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => gradeController.deleteGrade(req, res)
);

export { router as gradeRouter };
