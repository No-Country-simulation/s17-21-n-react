/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import { errorResponse, HttpCodes } from "../utils";

export const roleMiddleware = (allowedRoles:string[]) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if(allowedRoles.includes(req.user?.role as string))
      next();
    else
      return errorResponse({ res, status: HttpCodes.FORBIDDEN,message: "Nope" });
  };
};
