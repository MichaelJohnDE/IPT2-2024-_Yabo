import React, { createContext, useState, useContext, useEffect } from "react";

// Create the Auth Context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => localStorage.getItem("isAuthenticated") === "true" // Read from localStorage
    );

    // Function to login the user
    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true"); // Save state to localStorage
    };

    // Function to logout the user
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false"); // Clear the auth state from localStorage
    };

    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuthenticated") === "true";
        setIsAuthenticated(storedAuth); // Set auth state from localStorage on mount
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the Auth context
export const useAuth = () => {
    return useContext(AuthContext);
};
