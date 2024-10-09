import React, { useState } from 'react';

const studentsData = [
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

const Search = () => {
  const [searchTermId, setSearchTermId] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredStudents = studentsData.filter((student) =>
      student.id.includes(searchTermId)
    );
    setSearchResults(filteredStudents);
  };

  return (
    <div className="search-container">
      <h1>Search Students</h1>
      <div className="search-form">
        <input 
          type="text" 
          placeholder="Search by Student ID" 
          value={searchTermId} 
          onChange={(e) => setSearchTermId(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((student) => (
              <li key={student.id}>
                {student.id} - {student.firstName} {student.lastName} - {student.course} - {student.yearLevel}
                <br />
                Email: {student.email} | Birthdate: {student.birthdate} | Contact: {student.contactNumber}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
