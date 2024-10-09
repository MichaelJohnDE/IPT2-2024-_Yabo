import React from 'react';

const Modal = ({ isOpen, onClose, notification }) => {
  return (
    <div className={`modal2 ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {notification && (
          <>
            <h2>{notification.title}</h2>
            <p>{notification.date}</p>
            <p>{notification.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
