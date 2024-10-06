import React, { useState, useEffect, useRef } from "react"; 
import { Link } from "react-router-dom";
import fsuulogo from '../../../src/fsuulogo.png';
import profileIcon from '../../../src/profile.png'; 
import { useAuth } from './AuthContext';

export default function DashboardNavlist() {
    const { logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

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

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={fsuulogo} alt="Logo" className="logo" />
                <span className="brand-text">Father Saturnino Urios University</span>
            </div>
            <div className="navbar-links">
                <Link to="/dashboard/overview" className="navbar-link">Overview</Link>
                <Link to="/dashboard/notification" className="navbar-link">Notification</Link>
                <Link to="/dashboard/search" className="navbar-link">Search</Link>
                <div className="headerDropdownBtn" ref={dropdownRef}>
                    <button onClick={toggleDropdown} className="userIcon">
                        <img src={profileIcon} alt="User Icon" className="userIconImage" />
                        <span>MARK E...</span>
                    </button>
                    <div className={`side-profile-bar ${dropdownOpen ? 'open' : ''}`}>
                        <div className="bannerbgcontainer">
                            <p className="student-fullname">MARK EZEQUIEL PEREYRA</p>
                        </div>
                        <Link to="/dashboard" className="side-profile-link">Dashboard</Link>
                        <Link to="/dashboard/profile" className="side-profile-link">Profile</Link>
                        <button onClick={logout} className="side-profile-link logout-button">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}