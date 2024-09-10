import { Enrollment } from "@prisma/client";

export interface Enrollments {
  id: string;
  studentId: string;
  divisionId: string;
  yearId: string;
  subjectId: string;
}