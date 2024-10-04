import React from "react";
import { Link } from "react-router-dom";

export default function Navlist() {
    return (
        <nav>
            <Link to="/home"> </Link> <br />
            <Link to="/aboutus">About Us</Link> <br />
            <Link to="/contactus">Contact Us</Link><br />
            <Link to="/login">Login</Link>

        </nav>
    );
}