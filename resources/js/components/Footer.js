// Footer.js
import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">&copy; {new Date().getFullYear()} FSUU Enrollment System. All Rights Reserved.</p>
                <p className = "Footer-links">
                    <a href="/aboutus">About Us</a> | 
                    <a href="/contactus"> Contact Us</a>
                </p>
            </div>
        </footer>
    );
}
