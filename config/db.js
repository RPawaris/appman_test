import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "12345678",
  database: "university_student_db",
  port: 3306,
});

export default db;
