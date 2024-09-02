import app from "./src/app";
import { PORT } from "./src/configs";

app.listen(PORT, async () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
