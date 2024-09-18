export interface FindSubjectOptions {
  name?: { contains: string; mode: "insensitive" | "default" };
  subjectTeachers?: { some: { teacherId: string; }; };
  divisionId?: string;
  categoryId?: string;
  _count?: { classes: boolean };
}
