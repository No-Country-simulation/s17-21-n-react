import { Router, Request, Response } from "express";
import { EnrollmentController } from "../controllers/enrollment.controller";
import { EnrollmentRepository } from "../repositories/enrollment.repository";
import { EnrollmentService } from "../services/enrollment.service";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const enrollmentRepository = new EnrollmentRepository();
const enrollmentService = new EnrollmentService(enrollmentRepository);
const enrollmentController = new EnrollmentController(enrollmentService);

router.get("/", [ authMiddleware, roleMiddleware([ "ADMIN" ]) ], (req: Request, res: Response) => enrollmentController.getAllEnrollments(req, res));
router.get("/:id", [ authMiddleware, roleMiddleware([ "ADMIN" ]) ], (req: Request, res: Response) => enrollmentController.getEnrollmentById(req, res));
router.get("/students/:studentId/", [ authMiddleware, roleMiddleware([ "ADMIN" ]) ], (req: Request, res: Response) => enrollmentController.getEnrollmentsByStudentAndYear(req,res));
router.post("/create-enrollment",  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ], (req: Request, res: Response) => enrollmentController.createEnrollment(req, res));
router.patch("/:id/update-enrollment",  [ authMiddleware, roleMiddleware([ "ADMIN" ]) ], (req: Request, res: Response) => enrollmentController.updateEnrollment(req, res));

export { router as enrollmentRouter };
