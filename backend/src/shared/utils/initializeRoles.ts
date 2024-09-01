import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initializeRoles  = async () => {

  const roles = [ "ADMIN", "STUDENT", "PROFESSOR" ];

  for (const roleName of roles) {
    const roleExists = await prisma.role.findFirst({ where: { name: roleName } });

    if (!roleExists) {
      await prisma.role.create(
        {
          data: {
            name: roleName,
          }
        }
      );
      console.log(`Role '${roleName}' has been created.`);
    }
  }
};

export default initializeRoles;