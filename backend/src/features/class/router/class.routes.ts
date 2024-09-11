import { Router, Request, Response } from "express";
import { ClassController } from "../controllers/class.controller";
import { ClassRepository } from "../repositories/class.repository";
import { ClassService } from "../services/class.service";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const classRepository = new ClassRepository();
const classService = new ClassService(classRepository);
const classController = new ClassController(classService);

router.get(
  "/",
  [authMiddleware, roleMiddleware(["ADMIN", "TEACHER"])],
  (req: Request, res: Response) => classController.getAllClasses(req, res)
);

router.get(
  "/:id",
  [authMiddleware, roleMiddleware(["ADMIN", "TEACHER"])],
  (req: Request, res: Response) => classController.getClassById(req, res)
);

router.get(
  "/teacher/:id",
  [authMiddleware, roleMiddleware(["ADMIN", "TEACHER"])],
  (req: Request, res: Response) =>
    classController.getAllClassesByTeacherIdAndYear(req, res)
);

router.get(
  "/subject",
  [authMiddleware, roleMiddleware(["ADMIN", "TEACHER", "STUDENT"])],
  (req: Request, res: Response) =>
    classController.getAllClassesBySubjectIdOrYear(req, res)
);

router.post(
  "/",
  [authMiddleware, roleMiddleware(["ADMIN"])],
  (req: Request, res: Response) => classController.createClass(req, res)
);

router.put(
  "/:id",
  [authMiddleware, roleMiddleware(["ADMIN"])],
  (req: Request, res: Response) => classController.updateClass(req, res)
);

router.delete(
  "/:id",
  [authMiddleware, roleMiddleware(["ADMIN"])],
  (req: Request, res: Response) => classController.deleteClass(req, res)
);

export { router as classRouter };
