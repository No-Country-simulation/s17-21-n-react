import prisma from "./prisma";

export const initializeCategory = async () => {
  const categories = await prisma.subjectCategory.count();
  const categoriesData = [
    "Matemática",
    "Lengua y Literatura",
    "Ciencias",
    "Ciencias Sociales",
    "Física",
    "Artes",
  ];

  if (categories === 0) {
    for (const category of categoriesData)
      await prisma.subjectCategory.create({ data: { name: category } });
    console.log("Categories created");
  }
};
