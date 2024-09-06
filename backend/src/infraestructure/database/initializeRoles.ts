import { SystemBaseRoles } from "../../shared/constants/default-roles.enum";
import prisma from "./prisma";

const initializeRoles  = async () => {

  for (const roleName of Object.values(SystemBaseRoles)) {
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