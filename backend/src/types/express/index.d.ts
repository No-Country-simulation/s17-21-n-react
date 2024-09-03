import { MyJwtPayload } from "../../shared/utils";

declare global {
  namespace Express {
    interface Request {
      user?:MyJwtPayload,
    }
  }
}
export {};