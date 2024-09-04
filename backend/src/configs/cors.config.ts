import { CORS_ALLOW_ORIGINS, NODE_ENV } from "./envs";

const allowOrigins = (): string[] => {
  if (NODE_ENV !== "production") return [ "*" ];
  
  const originsArray = CORS_ALLOW_ORIGINS.split(" ").filter((el) => el !== "");
  
  return originsArray;
};

export const corsConfig = {
  credentials: true,
  origin     : allowOrigins(),
};