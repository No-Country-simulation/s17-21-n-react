import { Division, GradeSubject } from "@prisma/client";

export interface Grade {
  id: string;
  name: string;
  subjects: GradeSubject[];
  divisions: Division[];
}
