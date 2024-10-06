// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Stop click from closing modal */}
                <h1 className="login-text">Login</h1>
                <button className="close-button" onClick={onClose}>×</button> {/* Use a close button */}
                {children}
            </div>
        </div>
    );
};

export default Modal;
