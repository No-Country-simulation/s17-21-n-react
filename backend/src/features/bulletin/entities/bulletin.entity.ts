export interface Bulletin {
  id: string;
  title: string;
  description: string;
  eventDate: Date;
  scope: string;
  isActived: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}