import express, { Request, Response, Application } from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { corsConfig, MORGAN_FORMAT } from "./configs";
import { errorResponse, successResponse } from "./shared/utils";
import { swaggerSpec } from "./shared/utils/swagger";
import { mainRouter } from "./shared/routes";

const app: Application = express();

app.use(morgan(MORGAN_FORMAT));
app.use(cors(corsConfig));

app.use(express.json());
app.disable("x-powered-by");

//apply main router
app.use("/api/v1", mainRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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



export default app;