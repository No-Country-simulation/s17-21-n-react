export interface FindSubjectOptions {
  name?: { contains: string; mode: "insensitive" | "default" };
  divisionId?: string;
  categoryId?: string;
  _count?: { classes: boolean };
}
