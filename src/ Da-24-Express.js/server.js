import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
