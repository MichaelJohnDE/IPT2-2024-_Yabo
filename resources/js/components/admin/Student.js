import React, { useState } from 'react';

// Sample initial data for students
const initialStudents = [
  { id: 1, firstName: 'John', lastName: 'Doe', course: 'Bachelor of Science in Information Technology', email: 'john.doe@example.com', yearLevel: '1st Year', birthdate: '2000-01-01', contactNumber: '123-456-7890' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', course: 'Bachelor of Science in Computer Science', email: 'jane.smith@example.com', yearLevel: '2nd Year', birthdate: '1999-05-10', contactNumber: '098-765-4321' },
];

const StudentManagement = () => {
  const [students, setStudents] = useState(initialStudents);
  const [student, setStudent] = useState({ id: '', firstName: '', lastName: '', course: '', email: '', yearLevel: '', birthdate: '', contactNumber: '' });
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
    setStudent({ id: '', firstName: '', lastName: '', course: '', email: '', yearLevel: '', birthdate: '', contactNumber: '' }); // Reset form
  };

  const handleEdit = (student) => {
    setStudent(student);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="student-management">
      <h1>Student Management</h1>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={student.id} />
        
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
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
        <div>
          <label>Year Level:</label>
          <input
            type="text"
            name="yearLevel"
            value={student.yearLevel}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Birthdate:</label>
          <input
            type="date"
            name="birthdate"
            value={student.birthdate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={student.contactNumber}
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course</th>
            <th>Email</th>
            <th>Year Level</th>
            <th>Birthdate</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.course}</td>
              <td>{s.email}</td>
              <td>{s.yearLevel}</td>
              <td>{s.birthdate}</td>
              <td>{s.contactNumber}</td>
              <td>
                <button onClick={() => handleEdit(s)}>Edit</button>
                <button onClick={() => handleDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentManagement;
