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
