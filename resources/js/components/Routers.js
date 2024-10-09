import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Dashboard from "./admin/Dashboard";
import Student from "./admin/Student";        // Ensure Student component is imported
import Notification from "./admin/Notification"; // Ensure Notification component is imported
import Search from "./admin/Search";          // Ensure Search component is imported
import Navlist from "./Navlist";
import DashboardNavlist from "./admin/DashboardNavlist";
import Modal from "./Modal"; // Ensure Modal is imported
import { AuthProvider, useAuth } from "./AuthContext";

export default function Routers() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to close modal and reset fields
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    return (
        <AuthProvider>
            <Router>
                <ConditionalNavlist onLoginClick={handleLoginClick} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/student" element={<Student />} />
                    <Route path="/admin/notification" element={<Notification />} />
                    <Route path="/admin/search" element={<Search />} />
                </Routes>
                <LoginModal isOpen={isModalOpen} onClose={handleModalClose} />
            </Router>
        </AuthProvider>
    );
}

function ConditionalNavlist({ onLoginClick }) {
    const location = useLocation();
    return location.pathname.startsWith("/admin") ? (
        <DashboardNavlist />
    ) : (
        <Navlist onLoginClick={onLoginClick} />
    );
}

function LoginModal({ isOpen, onClose }) {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Reset username and password when modal closes
    const handleClose = () => {
        setUsername(""); // Reset username
        setPassword(""); // Reset password
        setError("");    // Clear any error messages
        onClose();       // Close the modal
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            login();
            navigate("/admin/dashboard");
            handleClose(); // Close modal and reset fields
        } else {
            setError("Invalid username or password.");
            setPassword("");
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}> {/* Use handleClose to reset on close */}
            <form onSubmit={handleSubmit} className='login-form'>
                <div className='form-group'>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="error-message">{error}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </Modal>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}
