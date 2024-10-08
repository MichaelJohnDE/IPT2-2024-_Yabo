import React from 'react';

const departments = [
  {
    id: 1,
    name: 'Computer Studies Program',
    totalEnrolledStudents: 460,
    courses: [
      { name: 'Bachelor of Science in Information Technology', enrolledStudents: 86 },
      { name: 'Bachelor of Science in Computer Science', enrolledStudents: 98 },
      { name: 'Bachelor of Science in Information Technology with special training in Computer Animation', enrolledStudents: 56 },
      { name: 'Diploma in Information Technology', enrolledStudents: 57 },
      { name: 'Bachelor of Library and Information Science', enrolledStudents: 87 },
      { name: 'Bachelor of Science in Entertainment and Multimedia Computing', enrolledStudents: 76 },
    ],
  },
  {
    id: 2,
    name: 'Acountancy Program',
    totalEnrolledStudents: 303,
    courses: [
      { name: 'Bachelor of Science in Accountancy Major in Accountancy', enrolledStudents: 78 },
      { name: 'Bachelor of Science in Accountancy Major in Accounting Information System', enrolledStudents: 89 },
      { name: 'Bachelor of Science in Accountancy Major in Internal Auditing', enrolledStudents: 68 },
      { name: 'Bachelor of Science in Accountancy Major in Management Accounting', enrolledStudents: 68 },
    ],
  },
  {
    id: 3,
    name: 'Business Administration Program',
    totalEnrolledStudents: 605,
    courses: [
      { name: 'Bachelor of Science in Hospitality Management', enrolledStudents: 121 },
      { name: 'Diploma in Hotel and Restaurant Services Technology', enrolledStudents: 101 },
      { name: 'Bachelor of Science in Tourism Management', enrolledStudents: 81 },
      { name: 'Bachelor of Science in Business Administration Major in Operation Management', enrolledStudents: 91 },
      { name: 'Bachelor of Science in Business Administration Major in Financials Management', enrolledStudents: 71 },
      { name: 'Bachelor of Science in Business Administration Major in Marketing Management', enrolledStudents: 80 },
      { name: 'Bachelor of Science in Business Administration Major in Human Resource Management', enrolledStudents: 60 },
    ],
  },
  {
    id: 4,
    name: 'Engineering and Technology Program',
    totalEnrolledStudents: 204,
    courses: [
      { name: 'Bachelor of Science in Civil Engineering', enrolledStudents: 106 },
      { name: 'Bachelor of Science in Industrial Engineering', enrolledStudents: 98 },
    ],
  },
  {
    id: 5,
    name: 'Nursing Program',
    totalEnrolledStudents: 202,
    courses: [
      { name: 'Bachelor of Science in Nursing', enrolledStudents: 202 },
    ],
  },
];

const DepartmentBox = ({ department }) => {
  return (
    <div className='department-box'>
      <h2>{department.name}</h2>
      <p><b>Total Enrolled Students:</b> {department.totalEnrolledStudents}</p>
      <ul>
        {department.courses.map((course) => (
          <li key={course.name}>
            <b>{course.name}</b> : {course.enrolledStudents} students
          </li>
        ))}
      </ul>
    </div>
  );
};

const Dashboard = () => {
  const rows = [];
  for (let i = 0; i < departments.length; i += 2) {
    rows.push(departments.slice(i, i + 2));
  }

  return (
    <div className='dashboard'>
      <div className='content'>
        <h1>Admin Dashboard</h1>
        <p>Welcome, <b>MARK EZEQUIEL PEREYRA (22100001984)</b></p>
        <div>
          {rows.map((row, rowIndex) => (
            <div className='department-row' key={rowIndex}>
              {row.map((department) => (
                <DepartmentBox key={department.id} department={department} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
