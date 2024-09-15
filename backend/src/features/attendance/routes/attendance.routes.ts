import { Router } from "express";
import prisma from "../../../infrastructure/database/prisma";
import { AttendanceRepository, AttendanceStudentRepository, ClassRepository, EnrollmentRepository } from "../repositories";
import { AttendanceService } from "../services";
import { AttendanceController } from "../controllers";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const attendanceRepository = new AttendanceRepository(prisma);
const attendanceStudentRepository = new AttendanceStudentRepository(prisma);
const classRepository = new ClassRepository(prisma);
const enrollmentRepository = new EnrollmentRepository(prisma);

const attendanceService = new AttendanceService(
  attendanceRepository,
  attendanceStudentRepository,
  classRepository,
  enrollmentRepository
);

const attendanceController = new AttendanceController(attendanceService);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware([ "ADMIN", "TEACHER" ]),
  (req, res) => attendanceController.update(req, res)
);

router.get(
  "/all",
  authMiddleware,
  roleMiddleware([ "ADMIN", "TEACHER" ]),
  (req, res) => attendanceController.getSert(req, res)
);

export { router as attendanceRouter };