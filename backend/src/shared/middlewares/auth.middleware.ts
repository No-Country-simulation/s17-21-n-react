/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../utils/jwt.util";
import { errorResponse } from "../utils";
import { HttpCodes } from "../utils/HTTPCode.utils";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return errorResponse({ res, status: HttpCodes.UNAUTHORIZED, message: "Access denied. No token provided." });
    
    try {
        const decoded = jwt.verify(token, jwtConfig.secret);
        (req as any).user = decoded;
        next();
    } catch (error: any) {
        errorResponse({ res, status: HttpCodes.UNAUTHORIZED, message: "Invalid token" });
    }
};