// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// import Home from "./Home"; 
// import Dashboard from "./Dashboard";
// import Navlist from "./Navlist2";
// import Modal from "./Modal"; 

// export default function Router2() { // Change the function name to Router2
//     const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
//     const navigate = useNavigate(); 

//     const handleLogoutClick = () => {
//         setIsLogoutModalOpen(true); 
//     };

//     const handleConfirmLogout = () => {
//         // Handle logout logic here (e.g., clear user session, redirect)
//         console.log("User logged out");
//         setIsLogoutModalOpen(false); 
//         navigate("/home"); 
//     };

//     const handleCancelLogout = () => {
//         setIsLogoutModalOpen(false); 
//     };

//     return (
//         <>
//             <Navlist onLogoutClick={handleLogoutClick} /> {/* Pass the logout handler */}
//             <Routes>
//                 <Route path="/" element={<Home />} /> {/* Home route */}
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 {/* Add other routes here if necessary */}
//             </Routes>

//             {/* Logout Confirmation Modal */}
//             <Modal isOpen={isLogoutModalOpen} onClose={handleCancelLogout}>
//                 <h2>Confirm Logout</h2>
//                 <p>Are you sure you want to log out?</p>
//                 <button onClick={handleConfirmLogout}>Yes, Log out</button>
//                 <button onClick={handleCancelLogout}>Cancel</button>
//             </Modal>
//         </>
//     );
// }

// if (document.getElementById("root")) {
//     ReactDOM.render(<Router2 />, document.getElementById("root")); // Ensure to render Router2
// }
