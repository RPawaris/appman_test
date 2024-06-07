import db from "../config/db.js";

export const getStudents = async (result) => {
  try {
    const [rows] = await db.query("SELECT * FROM students");
    result(null, rows);
  } catch (err) {
    console.log("Error: ", err);
    result(err, null);
  }
};

export const getStudentById = async (id, result) => {
  try {
    const [student] = await db.query("SELECT * FROM students WHERE id = ?", [
      id,
    ]);
    const [universities] = await db.query(
      `SELECT universities.id, universities.name FROM universities 
      INNER JOIN university_students ON universities.id = university_students.university_id 
      WHERE university_students.student_id = ?`,
      [id]
    );
    if (student.length > 0) {
      student[0].universities = universities;
      result(null, student[0]);
    } else {
      result({ message: "Student not found" }, null);
    }
  } catch (err) {
    console.log("Error: ", err);
    result(err, null);
  }
};

export const insertStudent = async (data, result) => {
  try {
    const [res] = await db.query("INSERT INTO students SET ?", data);
    result(null, res);
  } catch (err) {
    console.log("Error: ", err);
    result(err, null);
  }
};

export const updateStudentById = async (id, data, result) => {
  try {
    const [res] = await db.query("UPDATE students SET name = ? WHERE id = ?", [
      data.name,
      id,
    ]);
    result(null, res);
  } catch (err) {
    console.log("Error: ", err);
    result(err, null);
  }
};

export const deleteStudentById = async (id, result) => {
  try {
    const [res] = await db.query("DELETE FROM students WHERE id = ?", [id]);
    result(null, res);
  } catch (err) {
    console.log("Error: ", err);
    result(err, null);
  }
};
