import dotenv from "dotenv";

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV ?? "development";
export const PORT = process.env.PORT ?? "8000";
export const MORGAN_FORMAT = NODE_ENV === "production" ? "common" : "dev";

export const allowOrigins = (): string[] => {
  if (NODE_ENV !== "production") return [ "*" ];

  const origins = process.env.ALLOW_ORIGINS_URLS || "";
  const originsArray = origins.split(" ").filter((el) => el !== "");

  return originsArray;
};
