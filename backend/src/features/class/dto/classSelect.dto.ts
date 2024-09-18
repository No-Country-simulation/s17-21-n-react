export interface FindClassOptions {
  name?: { contains: string; mode: "insensitive" | "default" };
  date?: Date;
  subjectId?: string;
  yearId?: string;
  divisionId?: string;
}
