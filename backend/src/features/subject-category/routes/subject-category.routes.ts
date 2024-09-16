import { Router, Request, Response } from "express";
import { SubjectCategoryController } from "../controllers/subject-category.controller";
import { SubjectCategoryRepository } from "../repositories/subject-category.repository";
import { SubjectCategoryService } from "../services/subject-category.service";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const subjectCategoryRepository = new SubjectCategoryRepository();
const subjectCategoryService = new SubjectCategoryService(subjectCategoryRepository);
const subjectCategoryController = new SubjectCategoryController(subjectCategoryService);

router.get(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => subjectCategoryController.getAllSubjectCategories(req, res)
);

router.get(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => subjectCategoryController.getSubjectCategoryById(req, res)
);

router.post(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => subjectCategoryController.createSubjectCategory(req, res)
);

router.put(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => subjectCategoryController.updateSubjectCategory(req, res)
);

/*router.delete(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => subjectCategoryController.deleteSubjectCategory(req, res)
);*/
  
export { router as subjectCategoryRouter };