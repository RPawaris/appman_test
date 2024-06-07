import {
  getUniversities,
  getUniversityById,
  insertUniversity,
  updateUniversityById,
  deleteUniversityById,
  insertUniversityStudent,
  insertStudentUniversity,
} from "./universityModel.js";

export const showUniversities = async (req, res) => {
  getUniversities((err, universities) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(universities);
    }
  });
};

export const showUniversityById = async (req, res) => {
  getUniversityById(req.params.id, (err, university) => {
    if (err) {
      res.status(500).send(err);
    } else if (!university) {
      res.status(404).json({ message: "University not found" });
    } else {
      res.json(university);
    }
  });
};

export const createUniversity = async (req, res) => {
  const data = req.body;
  insertUniversity(data, (err, university) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: "University created!", university });
    }
  });
};

export const updateUniversity = async (req, res) => {
  const data = req.body;
  updateUniversityById(req.params.id, data, (err, university) => {
    if (err) {
      res.status(500).send(err);
    } else if (!university.affectedRows) {
      res.status(404).json({ message: "University not found" });
    } else {
      res.json({ message: "University updated!", university });
    }
  });
};

export const deleteUniversity = async (req, res) => {
  deleteUniversityById(req.params.id, (err, university) => {
    if (err) {
      res.status(500).send(err);
    } else if (!university.affectedRows) {
      res.status(404).json({ message: "University not found" });
    } else {
      res.json({ message: "University deleted!", university });
    }
  });
};

export const addUniversityStudent = async (req, res) => {
  const data = req.body;
  insertUniversityStudent(data, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: "University-Student relation added!", result });
    }
  });
};

export const addStudentUniversity = async (req, res) => {
  const data = req.body;
  insertStudentUniversity(data, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: "Student-University relation added!", result });
    }
  });
};
