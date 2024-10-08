import React, { useState } from 'react';

// Sample initial data for students
const initialStudents = [
  { id: 1, name: 'John Doe', course: 'Bachelor of Science in Information Technology', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', course: 'Bachelor of Science in Computer Science', email: 'jane.smith@example.com' },
];

const StudentManagement = () => {
  const [students, setStudents] = useState(initialStudents);
  const [student, setStudent] = useState({ id: '', name: '', course: '', email: '' });
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      // Update student record
      setStudents(students.map((s) => (s.id === student.id ? student : s)));
      setEditing(false);
    } else {
      // Add new student
      const newStudent = { ...student, id: students.length + 1 };
      setStudents([...students, newStudent]);
    }
    setStudent({ id: '', name: '', course: '', email: '' }); // Reset form
  };

  const handleEdit = (student) => {
    setStudent(student);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className= "dashboard">
      <div className="student-management">
        <h1>Student Management</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="id"
            value={student.id}
          />
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Course:</label>
            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">{editing ? 'Update Student' : 'Add Student'}</button>
        </form>

        <h2>Student Records</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>{s.email}</td>
                <td>
                  <button onClick={() => handleEdit(s)}>Edit</button>
                  <button onClick={() => handleDelete(s.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentManagement;
