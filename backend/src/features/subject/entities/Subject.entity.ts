import { SubjectTeacher } from "@prisma/client";

export interface SubjectEntity {
  id: string;
  name: string;
  description: string;
  scheduleInit: string;
  scheduleEnd: string;
  divisionId: string;
  categoryId: string;
  subjectTeachers?: SubjectTeacherEntity[];
  isDeleted: boolean;
} 

export interface SubjectTeacherEntity extends SubjectTeacher {
  id: string;
  teacherId: string;
  isDeleted: boolean;
}