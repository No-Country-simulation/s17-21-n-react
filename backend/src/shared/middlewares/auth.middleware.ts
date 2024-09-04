/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import { decodeJwt, errorResponse } from "../utils";
import { HttpCodes } from "../utils/HTTPCode.utils";
import { JwtPayload } from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token)
    return errorResponse({
      res,
      status : HttpCodes.UNAUTHORIZED,
      message: "Access denied. No token provided.",
    });

  try {
    const decoded = decodeJwt(token);
    req.user = { userId: (decoded as JwtPayload).userId };
    next();
  } catch (error: any) {
    console.log(error);
    errorResponse({
      res,
      status : HttpCodes.UNAUTHORIZED,
      message: "Invalid token",
    });
  }
};
