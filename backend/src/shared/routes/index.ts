import { Router } from "express";
import { authRouter } from "../../features/auth/routes";

const router = Router();

router.use("/auth", authRouter);


export { router as mainRouter };