
export interface Classes {
  id: string;
  name: string;
  date: Date;
  subjectId: string;
  yearId: string;
  _count?: {
    activities: number;
  };
  isDeleted: boolean;
}
