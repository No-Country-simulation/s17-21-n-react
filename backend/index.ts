import app from "./src/app";
import { PORT } from "./src/configs";
import { initializeDb } from "./src/infraestructure/database/initializeDb";

async function startServer() {
  try {
    await initializeDb();
    app.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
