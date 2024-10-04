import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from './components/Modal';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            navigate("/dashboard");
        } else if (username === "admin") {
            alert("Invalid password");
            setPassword("");
        } else {
            alert("Invalid username or password");
            setUsername("");
            setPassword("");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={() => setIsModalOpen(true)}>Login</button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </Modal>
        </div>
    );
}
