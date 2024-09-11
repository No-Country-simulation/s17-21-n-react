import { z } from "zod";
import { User } from "../entities/user.entity";

export const registerUserSchema = z.object({
  dni     : z.string().max(56),
  email   : z.string().email(),
  lastName: z.string().min(1, "Last Name is required").max(256, "Too large"),
  name    : z.string().min(1, "Name is required").max(256, "Too large"),
  roleId  : z.string().uuid()
});

export const updateUserSchema = registerUserSchema.partial();

const userKeys: Array<keyof User> = [ "name", "lastName","email", "isActive", "createdAt" ];
const allowedOrder: string[] = userKeys as string[];

export const getUserQuerySchema = z.object({
  isActive: z.enum([ "0", "1" ]).optional(),
  limit   : z.number().optional(),
  orderBy : z.enum([ "", ...allowedOrder ]).optional(),
  page    : z.number().optional(),
  role    : z.enum([ "ADMIN", "TEACHER", "STUDENT" ]).optional(),
  s       : z.string().max(64).optional(),
  sort    : z.enum([ "asc", "desc" ]).optional()
});