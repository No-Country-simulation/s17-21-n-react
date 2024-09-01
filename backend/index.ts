/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable key-spacing */
import app from "./src/app";
import { PORT } from "./src/configs";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import initializeRoles from "./src/shared/utils/initializeRoles";

const prisma = new PrismaClient();

async function createInitialAdminUser() {
  const adminEmail = "administrador@test.com";
  const adminPassword = "adminPassword123#";

  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        dni: "99999999",
        role: {
          connectOrCreate: {
            where: { name: "ADMIN" },
            create: { name: "ADMIN" },
          },
        },
      },
    });
    console.log("Initial admin user created");
  }
}

async function startServer() {
  try {
    await initializeRoles();
    await createInitialAdminUser();
    app.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
