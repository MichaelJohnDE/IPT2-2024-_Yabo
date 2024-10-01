import React from "react";
import { Link } from "react-router-dom";

export default function NavList() {
    return (
        <nav>
            <Link to="/home">Home</Link> <br />
            <Link to="/aboutus">About Us</Link> <br />
            <Link to="/contactus">Contact Us</Link>
            <Link to="/login">Login</Link>

        </nav>
    );
}