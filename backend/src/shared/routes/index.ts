import { Router } from "express";
import { authRouter } from "../../features/auth/routes";
import { bulletinRouter } from "../../features/bulletin/routes";
import { roleRouter } from "../../features/role/routes";
import { userRouter } from "../../features/user/routes";
import { subjectRouter } from "../../features/subject/routes/Subject.routes";
import { classRouter } from "../../features/class/router/class.routes";
import { gradeRouter } from "../../features/grade/routes/Grade.routes";
import { attendanceRouter, attendanceStudentRouter } from "../../features/attendance/routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/bulletin", bulletinRouter);
router.use("/role", roleRouter);
router.use("/user", userRouter);
router.use("/subject", subjectRouter);
router.use("/class", classRouter);
router.use("/grade", gradeRouter);
router.use("/attendance", attendanceRouter);
router.use("/attendanceStudent", attendanceStudentRouter);

export { router as mainRouter };