import { Router, Request, Response } from "express";
import { AcademicYearController } from "../controllers/academic-year.controller";
import { AcademicYearRepository } from "../repositories/academic-year.repository";
import { AcademicYearService } from "../services/academic-year.service";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const academicYearRepository = new AcademicYearRepository();
const academicYearService = new AcademicYearService(academicYearRepository);
const academicYearController = new AcademicYearController(academicYearService);

router.get(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => academicYearController.getAllAcademicYears(req, res)
);

router.get(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => academicYearController.getAcademicYearById(req, res)
);

router.post(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => academicYearController.createAcademicYear(req, res)
);

/*router.delete(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => academicYearController.deleteAcademicYear(req, res)
);*/
  
export { router as academicYearRouter };