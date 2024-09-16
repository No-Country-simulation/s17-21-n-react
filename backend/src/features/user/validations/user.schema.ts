import { z } from "zod";
import { User } from "../entities/user.entity";

export const registerUserSchema = z.object({
  birthDate: z.string().optional(),
  dni      : z.string().max(56),
  email    : z.string().email(),
  lastName : z.string().min(1, "Last Name is required").max(256, "Too large"),
  name     : z.string().min(1, "Name is required").max(256, "Too large"),
  phone    : z.string().optional(),
  roleId   : z.string().uuid()
});

export const updateUserSchema = registerUserSchema.partial();

const userKeys: Array<keyof User> = [ "name", "lastName","email", "isActive", "createdAt" ];
const allowedOrder: string[] = userKeys as string[];

export const getUserQuerySchema = z.object({
  isActive: z.enum([ "0", "1" ]).optional(),
  limit   : z.number().min(1).max(100).optional(),
  orderBy : z.enum([ "", ...allowedOrder ]).optional(),
  page    : z.number().min(1).optional(),
  role    : z.enum([ "ADMIN", "TEACHER", "STUDENT" ]).optional(),
  s       : z.string().max(64).optional(),
  sort    : z.enum([ "asc", "desc" ]).optional()
});

export const updatePasswordSchema = z.object({
  newPassword       : z.string().max(256),
  newPasswordConfirm: z.string().max(256),
  password          : z.string().max(256)
}).refine((data) => data.newPassword === data.newPasswordConfirm, {
  message: "Las contraseñas no coinciden",
  path   : [ "newPasswordConfirm" ],
});

export const updateEmailSchema = z.object({
  newEmail: z.string().email(),
  password: z.string().max(256)
});