import { Router } from "express";
import { authRouter } from "../../features/auth/routes";
import { bulletinRouter } from "../../features/bulletin/routes";
import { roleRouter } from "../../features/role/routes";
import { userRouter } from "../../features/user/routes";
import { subjectRouter } from "../../features/subject/routes/Subject.routes";
import { classRouter } from "../../features/class/router/class.routes";
import { gradeRouter } from "../../features/grade/routes/Grade.routes";
import { academicYearRouter } from "../../features/academic_year/routes/academic-year.routes";
import { subjectCategoryRouter } from "../../features/subject-category/routes/subject-category.routes";
import { activityRouter } from "../../features/activity/routes/activity.routes";
import { divisionRouter } from "../../features/division/routes/division.routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/bulletin", bulletinRouter);
router.use("/role", roleRouter);
router.use("/user", userRouter);
router.use("/subject", subjectRouter);
router.use("/class", classRouter);
router.use("/grade", gradeRouter);
router.use("/academic-year",academicYearRouter);
router.use("/subject-category", subjectCategoryRouter);
router.use("/activity", activityRouter);
router.use("/division", divisionRouter);

export { router as mainRouter };
