import { Router, Request, Response } from "express";
import { DivisionController } from "../controllers/division.controller";
import { DivisionRepository } from "../repositories/division.repository";
import { DivisionService } from "../services/division.service";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const divisionRepository = new DivisionRepository();
const divisionService = new DivisionService(divisionRepository);
const divisionController = new DivisionController(divisionService);

router.get(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN", "TEACHER", "STUDENT" ]) ],
  (req: Request, res: Response) => divisionController.getAllDivisions(req, res)
);

router.get(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN", "TEACHER", "STUDENT" ]) ],
  (req: Request, res: Response) => divisionController.getDivisionById(req, res)
);

router.post(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => divisionController.createDivision(req, res)
);

/*router.delete(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => divisionController.deleteDivision(req, res)
);*/
  
export { router as divisionRouter };