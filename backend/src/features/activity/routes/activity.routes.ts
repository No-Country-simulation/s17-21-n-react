import { Router, Request, Response } from "express";
import { ActivityController } from "../controllers/activity.controller";
import { ActivityRepository } from "../repositories/activity.repository";
import { ActivityService } from "../services/activity.service";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const activityRepository = new ActivityRepository();
const activityService = new ActivityService(activityRepository);
const activityController = new ActivityController(activityService);

router.get(
  "/",
  [ authMiddleware, roleMiddleware([ "ADMIN", "TEACHER", "STUDENT" ]) ],
  (req: Request, res: Response) => activityController.getAllActivities(req, res)
);

router.get(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN", "TEACHER", "STUDENT" ]) ],
  (req: Request, res: Response) => activityController.getActivityById(req, res)
);

router.post(
  "/",
  [ authMiddleware, roleMiddleware([ "TEACHER" ]) ],
  (req: Request, res: Response) => activityController.createActivity(req, res)
);

/*router.delete(
  "/:id",
  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ],
  (req: Request, res: Response) => activityController.deleteActivity(req, res)
);*/
  
export { router as activityRouter };