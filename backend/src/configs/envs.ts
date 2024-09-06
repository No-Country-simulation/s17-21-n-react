import dotenv from "dotenv";

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV ?? "development";
export const PORT = process.env.PORT ?? "8000";
export const API_URL = process.env.API_URL || `http://localhost:${PORT}`;
export const MORGAN_FORMAT = NODE_ENV === "production" ? "common" : "dev";

export const CORS_ALLOW_ORIGINS = process.env.ALLOW_ORIGINS_URLS || "";

export const INITIAL_USER_PASSWORD = process.env.INITIAL_USER_PASSWORD || "adminPassword123#";

export const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";