// api/students.js

const fs = require('fs');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Implement logic to fetch all students
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
    res.status(200).json(data.students);
  } else if (req.method === 'POST') {
    // Implement logic to add a new student
    // Access request body using req.body
  } else if (req.method === 'PUT') {
    // Implement logic to update a student by ID
    // Access request body using req.body and request params using req.query or req.params
  } else if (req.method === 'DELETE') {
    // Implement logic to delete a student by ID
    // Access request params using req.query or req.params
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
