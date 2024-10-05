import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Stop click from closing modal */}
                <button className="close-button" onClick={onClose}>×</button> {/* Use a close button */}
                {children}
            </div>
        </div>
    );
};

export default Modal;
