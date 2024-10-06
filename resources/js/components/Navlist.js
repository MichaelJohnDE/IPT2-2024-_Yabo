// Navlist.js
import React from "react";
import { Link } from "react-router-dom";
import fsuulogo from '../../../src/fsuulogo.png';

export default function Navlist({ onLoginClick }) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                    <img src={fsuulogo} alt="Logo" className="logo" />
                    <span className="brand-text">Father Saturnino Urios University</span>    
            </div>
            <div className="navbar-links">
                <Link to="/home">Home</Link><br />
                <Link to="/aboutus">About Us</Link><br />
                <Link to="/contactus">Contact Us</Link><br />
                <button className="login-button" onClick={onLoginClick}>Login</button>
            </div>
        </nav>
    );
}
