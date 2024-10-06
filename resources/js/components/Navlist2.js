// Navlist2.js
import React from "react";
import { Link } from "react-router-dom";
import fsuulogo from '../../../src/fsuulogo.png';

export default function Navlist({ onLogoutClick }) {
    return (
        <nav className="navbar2">
            <div className="navbar2-brand">
                <img src={fsuulogo} alt="Logo" className="logo" />
                <span className="brand-text">Father Saturnino Urios University</span>
            </div>
            <div className="navbar2-links">
                <Link to="/dashboard">Dashboard</Link><br />
                <Link to="/home">Home</Link>
                <button onClick={onLogoutClick}>Logout</button> {/* Use the onLogoutClick function */}
            </div>
        </nav>
    );
}
