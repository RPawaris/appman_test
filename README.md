# University API

## Introduction

This API allows users to manage universities and students. It provides endpoints for retrieving, creating, updating, and deleting universities and students. Additionally, it supports establishing relationships between universities and students.

## Technologies Used

- Node.js
- Express.js
- MySQL

## Installation

1. Clone the repository:


2. Navigate to the project directory:


3. Install dependencies:


4. Set up MySQL database:
   - SQL script is in createDB.txt

## Usage

1. Start the server:

2. Open Postman or any API testing tool.
   - There are Postman file available in this project.

4. Use the following endpoints to interact with the API:

   - `GET /api/universities`: Get all universities.
   - `GET /api/universities/:id`: Get university by ID.
   - `POST /api/universities`: Create a new university.
   - `PUT /api/universities/:id`: Update university by ID.
   - `DELETE /api/universities/:id`: Delete university by ID.
   - `GET /api/students`: Get all students.
   - `GET /api/students/:id`: Get student by ID.
   - `POST /api/students`: Create a new student.
   - `PUT /api/students/:id`: Update student by ID.
   - `DELETE /api/students/:id`: Delete student by ID.
   - `POST /api/addUniversityStudent`: Add a student to a university.
   - `POST /api/addStudentUniversity`: Add a university to a student.

## Error Handling

- If an endpoint is requested with an invalid ID or data, the API will respond with a 404 status code and an error message.
- If there is an internal server error, the API will respond with a 500 status code and an error message.






