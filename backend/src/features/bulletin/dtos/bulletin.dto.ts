export interface CreateBulletinDto {
  title: string;
  description: string;
  scope: string;
  eventDate: Date;
  isActivated?: boolean;
}

export interface UpdateBulletinDto {
  title?: string;
  description?: string;
  scope?: string;
  eventDate?: Date;
  isActivated?: boolean;
}

export interface FindManyBulletinDto {
  page?: number;
  limit?: number;
  orderBy?: string;
  sort?: "asc" | "desc";
  scope?: string;
}