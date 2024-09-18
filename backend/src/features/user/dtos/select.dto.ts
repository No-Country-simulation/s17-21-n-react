import { SystemBaseRoles } from "../../../shared/constants";
import { User } from "../entities/user.entity";

export interface SelectUserDto extends Omit<User, "password" | "role"> {
  role: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UserProfileDto
  extends Omit<SelectUserDto, "createdAt" | "updatedAt" | "isActive" | "deletedAt" | "roleId" | "id"> {}

export interface FindUsersOptionsDto {
  role?: string;
  s?: string;
  isActive?: string;
  page: string;
  limit?: string;
  orderBy?: string;
  sort?: string;
}

export interface PaginateOptionsArgs<U> {
  page?: number;
  limit?: number;
  orderBy?: keyof U;
  sort?: "asc" | "desc";
}

export type FilterUsers = {
  role?: SystemBaseRoles;
  searchParam?: string;
  isActive?: boolean;
  pagOptions: PaginateOptionsArgs<User>;
};

const allowedOrder: Array<keyof User> = [
  "createdAt",
  "name",
  "lastName",
  "email",
  "isActive",
];
export const orders: string[] = allowedOrder;
