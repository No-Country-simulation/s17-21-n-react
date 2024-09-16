import prisma from "./prisma";

export const initializeDivisions = async () => {
  const divisions = await prisma.division.count();
  const divisionsData = [ "A", "B", "C", "D", "E", "F" ];

  if (divisions === 0) {
    for (const division of divisionsData)
      await prisma.division.create({ data: { name: division } });
    console.log("Divisions created");
  }
};
