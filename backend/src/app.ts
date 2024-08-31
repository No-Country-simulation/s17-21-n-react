import express, { Request, Response, Application } from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { allowOrigins, MORGAN_FORMAT } from "./configs";
import { errorResponse, successResponse } from "./shared/utils";
import { authRouter } from "./features/auth/auth.router";
import { swaggerSpec } from "./shared/utils/swagger";

const app: Application = express();

app.use(morgan(MORGAN_FORMAT));
app.use(cors({
  credentials: true,
  origin     : allowOrigins(),
}));

app.use(express.json());

app.get("/", (_: Request, res: Response) => {
  return successResponse({ data: { date: Date.now(), version: "v1" }, res });
});

// Route 404 default
app.use((req: Request, res: Response) => {
  return errorResponse({
    message: `[${req.method}]: ${req.originalUrl} not found`,
    res,
    status : 404,
  });
});

app.use("/api/v1/auth", authRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;