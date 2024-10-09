import React, { useState } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    firstName: 'Mark',
    lastName: 'Pereyra',
    facultyId: '22100001984',
    birthdate: '1995-03-10',
    email: 'mark.pereyra@example.com',
    contactNumber: '123-456-7890',
    department: 'Computer Studies',
    gender: 'Male',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Confirm if the user wants to save changes
    const confirmSave = window.confirm('Do you want to save the changes?');
    if (confirmSave) {
      // Simulate saving changes (this is where you would typically make an API call)
      console.log('User Data Updated:', userData);
      alert('Changes have been saved successfully!');
    }
  };

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <form className="user-profile" onSubmit={handleSubmit}>
        <div className="profile-field">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-field">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-field">
          <label>Faculty ID:</label>
          <input
            type="text"
            name="facultyId"
            value={userData.facultyId}
            onChange={handleChange}
            required
            disabled // Assuming Faculty ID is not editable
          />
        </div>
        <div className="profile-field">
          <label>Birthdate:</label>
          <input
            type="date"
            name="birthdate"
            value={userData.birthdate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-field">
          <label>Contact No.:</label>
          <input
            type="tel"
            name="contactNumber"
            value={userData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-field">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={userData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-field">
          <label>Gender:</label>
          <select
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="profile-field">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
