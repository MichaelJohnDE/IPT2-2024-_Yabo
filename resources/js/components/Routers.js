import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Dashboard from "./Dashboard";
import Navlist from "./Navlist";
import Modal from "./Modal";

export default function Routers() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleLoginClick = () => {
        setIsModalOpen(true); // Function to open modal
    };

    return (
        <Router>
            <Navlist onLoginClick={handleLoginClick} /> {/* Pass function to Navlist */}
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <LoginModalContent onClose={handleModalClose} />
            </Modal>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

// Create a component for the modal content
function LoginModalContent({ onClose }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the username and password are correct
        if (username === "admin" && password === "admin123") {
            navigate("/dashboard");
            onClose(); // Close modal if successful
            // Navigate to dashboard or perform other actions here
        } else {
            setError("Invalid username or password."); // Set error message
            setPassword(""); // Optionally clear the password
        }
    };

    return (
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
                {error && <p className="error-message">{error}</p>} {/* Render error message */}
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}
