/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import { decodeJwt, errorResponse } from "../utils";
import { HttpCodes } from "../utils/HTTPCode.utils";
import { JwtPayload } from "jsonwebtoken";
import prisma from "../../infrastructure/database/prisma";

export const authMiddleware = async (
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
    const user = await prisma.user.findUnique({
      select: { id: true, role: { select: { name: true } } },
      where : { id: (decoded as JwtPayload).userId }
    });
    if(!user)
      errorResponse({
        res,
        status : HttpCodes.UNAUTHORIZED,
        message: "Invalid token",
      });
    req.user = { userId: user?.id, role: user?.role.name };
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
