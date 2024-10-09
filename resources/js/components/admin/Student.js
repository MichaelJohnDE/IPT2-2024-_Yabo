import React, { useState } from 'react';
import Footer from './../Footer';

// Sample initial data for students, including 5 additional students
const initialStudents = [
  { id: '001', firstName: 'John', lastName: 'Doe', course: 'Bachelor of Science in Information Technology', email: 'john.doe@example.com', yearLevel: '1st Year', birthdate: '2000-01-01', contactNumber: '123-456-7890' },
  { id: '002', firstName: 'Jane', lastName: 'Smith', course: 'Bachelor of Science in Computer Science', email: 'jane.smith@example.com', yearLevel: '2nd Year', birthdate: '1999-05-10', contactNumber: '098-765-4321' },
  { id: '003', firstName: 'Michael', lastName: 'Johnson', course: 'Bachelor of Science in Civil Engineering', email: 'michael.johnson@example.com', yearLevel: '3rd Year', birthdate: '1998-03-15', contactNumber: '987-654-3210' },
  { id: '004', firstName: 'Emily', lastName: 'Davis', course: 'Bachelor of Science in Business Administration', email: 'emily.davis@example.com', yearLevel: '1st Year', birthdate: '2001-07-22', contactNumber: '456-789-1230' },
  { id: '005', firstName: 'William', lastName: 'Martinez', course: 'Bachelor of Science in Mechanical Engineering', email: 'william.martinez@example.com', yearLevel: '2nd Year', birthdate: '1999-09-30', contactNumber: '321-654-9870' },
  { id: '006', firstName: 'Sophia', lastName: 'Garcia', course: 'Bachelor of Science in Nursing', email: 'sophia.garcia@example.com', yearLevel: '4th Year', birthdate: '1997-11-18', contactNumber: '789-123-4567' },
  { id: '007', firstName: 'James', lastName: 'Wilson', course: 'Bachelor of Science in Electrical Engineering', email: 'james.wilson@example.com', yearLevel: '3rd Year', birthdate: '1998-12-05', contactNumber: '654-321-0987' },
  { id: '008', firstName: 'Olivia', lastName: 'Hernandez', course: 'Bachelor of Science in Accountancy', email: 'olivia.hernandez@example.com', yearLevel: '2nd Year', birthdate: '2000-02-17', contactNumber: '987-123-6540' },
  { id: '009', firstName: 'Liam', lastName: 'Lee', course: 'Bachelor of Science in Information Systems', email: 'liam.lee@example.com', yearLevel: '1st Year', birthdate: '2002-06-13', contactNumber: '321-987-6543' },
  { id: '010', firstName: 'Emma', lastName: 'Walker', course: 'Bachelor of Science in Biology', email: 'emma.walker@example.com', yearLevel: '4th Year', birthdate: '1997-04-08', contactNumber: '123-987-4567' },
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
    // Format Student ID to 3 digits (zero-padded)
    const formattedId = student.id.replace(/\D/g, '').padStart(3, '0').slice(0, 3);

    if (editing) {
      // Update student record
      setStudents(students.map((s) => (s.id === formattedId ? { ...student, id: formattedId } : s)));
      setEditing(false);
    } else {
      // Add new student
      const newStudent = { ...student, id: formattedId };
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
      <form onSubmit={handleSubmit} className="student-form">
        <input type="hidden" name="id" value={student.id} />

        <div className="form-row">
          <label>Student ID:</label>
          <input type="text" name="id" value={student.id} maxLength="3" onChange={handleInputChange} required />
          
          <label>Birthdate:</label>
          <input type="date" name="birthdate" value={student.birthdate} onChange={handleInputChange} required />
        </div>

        <div className="form-row">
          <label>First Name:</label>
          <input type="text" name="firstName" value={student.firstName} onChange={handleInputChange} required />
          
          <label>Last Name:</label>
          <input type="text" name="lastName" value={student.lastName} onChange={handleInputChange} required />
        </div>

        <div className="form-row">
          <label>Year Level:</label>
          <input type="text" name="yearLevel" value={student.yearLevel} onChange={handleInputChange} required />
          
          <label>Course:</label>
          <input type="text" name="course" value={student.course} onChange={handleInputChange} required />
        </div>

        <div className="form-row">
          <label>Email:</label>
          <input type="email" name="email" value={student.email} onChange={handleInputChange} required />
          
          <label>Contact No.:</label>
          <input type="text" name="contactNumber" value={student.contactNumber} onChange={handleInputChange} required />
        </div>

        <button type="submit" className="submit-button">{editing ? 'Update Student' : 'Add Student'}</button>
      </form>

      <h2>Student Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>
                <div>
                  <strong>{s.firstName} {s.lastName}</strong><br />
                  <span>{s.yearLevel} {s.course}</span><br />
                  <span>{s.email} {s.contactNumber}</span><br />
                  <span>{s.birthdate}</span>
                </div>
              </td>
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
