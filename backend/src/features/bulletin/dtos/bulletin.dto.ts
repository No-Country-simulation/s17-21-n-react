import { SortOrderType } from "../../../shared/utils";

export interface CreateBulletinDto {
  title: string;
  description: string;
  scope: string;
  eventDate: Date;
  isActived?: boolean;
}

export interface UpdateBulletinDto {
  title?: string;
  description?: string;
  scope?: string;
  eventDate?: Date;
  isActived?: boolean;
}

export interface FindManyBulletinDto {
  page?: number;
  limit?: number;
  orderBy?: string;
  sort?: SortOrderType;
  scope?: string;
}