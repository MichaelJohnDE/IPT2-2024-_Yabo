import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from './Modal';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            login();
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
        <div className='login'>
            <Navlist /> 
            <h1>Login</h1>
            <div className="button-container">
                <button onClick={() => setIsModalOpen(true)}>Login</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
                    </div>
                    <button type="submit">Login</button>
                </form>
            </Modal>
        </div>
    );
}
