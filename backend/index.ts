/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable key-spacing */
import app from "./src/app";
import { PORT } from "./src/configs";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

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
        name: "Admin User",
        role: {
          connectOrCreate: {
            where: { name: "admin" },
            create: { name: "admin" },
          },
        },
      },
    });
    console.log("Initial admin user created");
  }
}

async function startServer() {
  try {
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
