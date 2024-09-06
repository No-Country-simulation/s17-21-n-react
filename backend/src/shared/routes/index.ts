import { Router } from "express";
import { authRouter } from "../../features/auth/routes";
import { bulletinRouter } from "../../features/bulletin/routes";
import { roleRouter } from "../../features/role/routes";
import { userRouter } from "../../features/user/routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/bulletin", bulletinRouter);
router.use("/role", roleRouter);
router.use("/user", userRouter);

export { router as mainRouter };