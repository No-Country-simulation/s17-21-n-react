import { Router } from "express";
import prisma from "../../../infrastructure/database/prisma";
import { AttendanceStudentRepository } from "../repositories";
import { AttendanceStudentService } from "../services";
import { AttendanceStudentController } from "../controllers/attendanceStudent.controller";
import { authMiddleware, roleMiddleware } from "../../../shared/middlewares";

const router = Router();

const attendanceStudentRepository = new AttendanceStudentRepository(prisma);
const attendanceStudentService = new AttendanceStudentService(attendanceStudentRepository);
const attendanceStudentController = new AttendanceStudentController(attendanceStudentService);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware([ "ADMIN", "TEACHER" ]),
  (req, res) => attendanceStudentController.update(req, res)
);


export { router as attendanceStudentRouter };