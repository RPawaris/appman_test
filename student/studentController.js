import {
  getStudents,
  getStudentById,
  insertStudent,
  updateStudentById,
  deleteStudentById,
} from "./studentModel.js";

export const showStudents = async (req, res) => {
  try {
    getStudents((err, students) => {
      if (err) throw err;
      res.json(students);
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const showStudentById = async (req, res) => {
  try {
    getStudentById(req.params.id, (err, student) => {
      if (!student) {
        res.status(404).json({ message: "Student not found" });
      } else {
        res.json(student);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createStudent = async (req, res) => {
  const data = req.body;
  try {
    insertStudent(data, (err, student) => {
      res.json({ message: "Student created!", student });
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateStudent = async (req, res) => {
  const data = req.body;
  try {
    updateStudentById(req.params.id, data, (err, student) => {
      if (!student.affectedRows) {
        res.status(404).json({ message: "Student not found" });
      } else {
        res.json({ message: "Student updated!", student });
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    deleteStudentById(req.params.id, (err, student) => {
      if (!student.affectedRows) {
        res.status(404).json({ message: "Student not found" });
      } else {
        res.json({ message: "Student deleted!", student });
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
