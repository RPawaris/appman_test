import express from "express";
import bodyParser from "body-parser";
import universityRoutes from "./university/universityRouter.js";
import studentRoutes from "./student/studentRouter.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/", universityRoutes);
app.use("/", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});
