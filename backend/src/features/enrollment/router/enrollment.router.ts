import { Router } from "express";
import { EnrollmentController } from "../controllers/enrollment.controller";
import { EnrollmentRepository } from "../repositories/enrollment.repository";
import { EnrollmentService } from "../services/enrollment.service";

const router = Router();

const enrollmentRepository = new EnrollmentRepository();
const enrollmentService = new EnrollmentService(enrollmentRepository);
const enrollmentController = new EnrollmentController(enrollmentService);

router.get("/", (req, res) => enrollmentController.getAllEnrollments(req, res));
router.get("/:id", (req, res) => enrollmentController.getEnrollmentById(req, res));
router.post("/", (req, res) => enrollmentController.createEnrollment(req, res));
router.put("/:id", (req, res) => enrollmentController.updateEnrollment(req, res));

export { router as enrollmentRouter };
