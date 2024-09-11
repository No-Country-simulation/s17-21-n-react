export interface ReturnBulletin {
  id: string;
  title: string;
  description: string;
  eventDate: Date;
  scope: string;
  isActivated: boolean;
}

export interface Bulletin extends ReturnBulletin {
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
