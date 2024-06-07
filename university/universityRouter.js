import express from "express";
import {
  showUniversities,
  showUniversityById,
  createUniversity,
  updateUniversity,
  deleteUniversity,
  addUniversityStudent,
  addStudentUniversity,
} from "./universityController.js";

const router = express.Router();

router.get("/universities", showUniversities);
router.get("/universities/:id", showUniversityById);
router.post("/universities", createUniversity);
router.put("/universities/:id", updateUniversity);
router.delete("/universities/:id", deleteUniversity);
router.post("/university_students", addUniversityStudent);
router.post("/student_universities", addStudentUniversity);

export default router;
