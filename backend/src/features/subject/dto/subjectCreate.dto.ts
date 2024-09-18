export interface SubjectTeacherCreate {
  teacherId: string;
}

export interface SubjectCreate {
  name: string;
  subjectTeachers: SubjectTeacherCreate[];
  description: string;
  scheduleInit: string;
  scheduleEnd: string;
  divisionId: string;
  categoryId: string;
}

export type SubjectTeachersOperations = {
  add?: { teacherId: string; academicYearId?: string }[],
  remove?: {
    subjectId?: string;
    teacherId: string;
    academicYearId?: string;
  }[],
  set?: { teacherId: string; academicYearId?: string }[]
};