import db from "../config/db.js";

export const getUniversities = async (result) => {
  try {
    const [rows] = await db.query("SELECT * FROM universities");
    result(null, rows);
  } catch (err) {
    console.log("Error: ", err);
    result(err, null);
  }
};

export const getUniversityById = async (id, result) => {
  try {
    const [university] = await db.query(
      "SELECT * FROM universities WHERE id = ?",
      [id]
    );
    const [students] = await db.query(
      `SELECT students.id, students.name FROM students 
      INNER JOIN university_students ON students.id = university_students.student_id 
      WHERE university_students.university_id = ?`,
      [id]
    );
    if (university.length > 0) {
      university[0].students = students;
      result(null, university[0]);
    } else {
      result({ message: "University not found" }, null);
    }
  } catch (err) {
    console.log("Error: ", err);
    result(err, null);
  }
};

export const insertUniversity = async (data, result) => {
  try {
    const [res] = await db.query("INSERT INTO universities SET ?", data);
    result(null, res);
  } catch (err) {
    console.log("Error: ", err);
    result(err, null);
  }
};

export const updateUniversityById = async (id, data, result) => {
  try {
    const [res] = await db.query(
      "UPDATE universities SET name = ? WHERE id = ?",
      [data.name, id]
    );
    result(null, res);
  } catch (err) {
    console.log("Error: ", err);
    result(err, null);
  }
};

export const deleteUniversityById = async (id, result) => {
  try {
    const [res] = await db.query("DELETE FROM universities WHERE id = ?", [id]);
    result(null, res);
  } catch (err) {
    console.log("Error: ", err);
    result(err, null);
  }
};

export const insertUniversityStudent = async (data, result) => {
  try {
    const [res] = await db.query("INSERT INTO university_students SET ?", data);
    result(null, res);
  } catch (err) {
    result(err, null);
  }
};

export const insertStudentUniversity = async (data, result) => {
  try {
    const [res] = await db.query("INSERT INTO university_students SET ?", data);
    result(null, res);
  } catch (err) {
    result(err, null);
  }
};
