import { Response } from "express";

interface ResponseArgs {
  res: Response;
  status?: number;
  data?: unknown;
  message?: string;
}

const MESSAGE_ERROR_DEFAULT = "Internal server error";

export const successResponse = ({ res, status = 200, data, message }: ResponseArgs) =>
  res.status(status).json({ data, error: false, message, success: true });

export const errorResponse = ({ res, status = 500, message = MESSAGE_ERROR_DEFAULT }: ResponseArgs) =>
  res.status(status).json({ error: true, message, success: false });