import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';  // Importing the search icon
import fsuulogo from '../../../../src/fsuulogo.png';
import profileIcon from '../../../../src/profile.png'; 
import { useAuth } from '../AuthContext';

export default function DashboardNavlist() {
    const { logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate(); // To handle redirection

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeDropdown);
        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/"); // Redirect to homepage after logout
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    };

    return (
        <nav className="dashboard-navbar">
            <div className="dashboard-navbar-brand">
                <img src={fsuulogo} alt="Logo" className="logo" />
                <span className="brand-text">Father Saturnino Urios University</span>
            </div>
            <div className="navbar-links">
                <Link to="/admin/dashboard" className="navbar-link">Overview</Link>
                <Link to="/admin/student" className="navbar-link">Students</Link>
                <Link to="/admin/notification" className="navbar-link">Notifications</Link>

                <Link to="/admin/search" className="navbar-link">
                    <FaSearch className="search-icon" />
                </Link>

                <div className={`headerDropdownBtn ${dropdownOpen ? 'dropdownOpen' : ''}`} ref={dropdownRef}>
                    <button onClick={toggleDropdown} className="userIcon">
                        <img src={profileIcon} alt="User Icon" className="userIconImage" />
                        <span>MARK E...</span>
                    </button>

                    {/* Hovercard for Full Name */}
                    <div className={`hovercard ${dropdownOpen ? 'hideHovercard' : ''}`}>
                        MARK EZEQUIEL PEREYRA
                    </div>

                    {/* Dropdown content */}
                    <div className={`side-profile-bar ${dropdownOpen ? 'open' : ''}`}>
                        <Link to="/admin/dashboard" className="side-profile-link">Dashboard</Link>
                        <Link to="/admin/dashboard/profile" className="side-profile-link">Profile</Link>
                        <button onClick={handleLogout} className="side-profile-link logout-button">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
