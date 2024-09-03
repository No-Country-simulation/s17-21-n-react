import { MyJwtPayload } from "../shared/utils";

declare module "jsonwebtoken" {
  export interface JwtPayload extends jwt.JwtPayload,MyJwtPayload {}
}

export {};