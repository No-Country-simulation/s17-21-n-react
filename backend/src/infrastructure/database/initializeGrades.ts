import prisma from "./prisma";

export const initializeGrades = async () => {
  const grades = await prisma.grade.count();
  const gradesData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];

  if (grades === 0) {
    for (const grade of gradesData)
      await prisma.grade.create({
        data: {
          academicYear: { create: { year: new Date().getFullYear() } },
          name        : grade.toString(),
        },
      });
    console.log("Grades created");
  }
};
