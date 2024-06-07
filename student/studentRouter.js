import express from "express";
import {
  showStudents,
  showStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./studentController.js";

const router = express.Router();

router.get("/students", showStudents);
router.get("/students/:id", showStudentById);
router.post("/students", createStudent);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

export default router;
