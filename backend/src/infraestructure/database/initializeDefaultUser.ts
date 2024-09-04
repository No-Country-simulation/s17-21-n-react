import prisma from "./prisma";
import { SystemRoles } from "../../shared/constants";
import { INITIAL_USER_PASSWORD } from "../../configs";
import { hashPassword } from "../../shared/utils";

const defaultUserData = {
  dni      : "99999999",
  email    : "administrador@test.com",
  last_name: "EducaPro",
  name     : "Admin",
  password : INITIAL_USER_PASSWORD,
};

const initializeDefaultUser = async () => {
  const existingAdmin = await prisma.user.findUnique({
    where: { email: defaultUserData.email },
  });
  if (!existingAdmin) {
    const hashedPassword = await hashPassword(defaultUserData.password);

    await prisma.user.create({
      data: {
        ...defaultUserData,
        password: hashedPassword,
        role    : {
          connectOrCreate: {
            create: { name: SystemRoles.ADMIN },
            where : { name: SystemRoles.ADMIN },
          },
        },
      },
    });
  }
};

export default initializeDefaultUser;
