import { Router } from "express";
import { authRouter } from "../../features/auth/routes";
import { bulletinRouter } from "../../features/bulletin/routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/bulletin", bulletinRouter);

export { router as mainRouter };