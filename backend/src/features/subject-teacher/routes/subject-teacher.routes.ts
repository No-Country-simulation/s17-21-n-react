import { Router, Request, Response } from "express";
import { SubjectTeacherController } from "../cotrollers/subject-teacher.controller";
import { SubjectTeacherRepository } from "../repositories/subject-teacher.repository";
import { SubjectTeacherService } from "../services/subject-teacher.service";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const subjectTeacherRepository = new SubjectTeacherRepository();
const subjectTeacherService = new SubjectTeacherService(subjectTeacherRepository);
const subjectTeacherController = new SubjectTeacherController(subjectTeacherService);

router.get(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN", "TEACHER" ]) ],
  (req: Request, res: Response) => subjectTeacherController.getAllSubjectTeachers(req, res)
);

router.get(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN", "TEACHER" ]) ],
  (req: Request, res: Response) => subjectTeacherController.getSubjectTeacherById(req, res)
);

router.post(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => subjectTeacherController.createSubjectTeacher(req, res)
);

/*router.delete(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => subjectTeacherController.deleteSubjectTeacher(req, res)
);*/
  
export { router as subjectTeacherRouter };