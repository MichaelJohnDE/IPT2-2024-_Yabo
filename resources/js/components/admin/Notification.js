import React, { useState } from 'react';
import Modal from './NotifModal';

const notificationsData = [
  { id: 1, title: 'New Course Available', date: '2024-10-10', description: 'A new course on Data Science is now available.', isRead: false },
  { id: 2, title: 'Meeting Reminder', date: '2024-10-09', description: 'Don\'t forget about the meeting on Friday.', isRead: true },
  { id: 3, title: 'Grade Posted', date: '2024-10-08', description: 'Your grade for the last exam has been posted.', isRead: false },
  // Add more notifications as needed
];

const Notification = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationClick = (notification) => {
    // Mark the notification as read
    setNotifications((prevNotifications) =>
      prevNotifications.map((n) =>
        n.id === notification.id ? { ...n, isRead: true } : n
      )
    );
    setSelectedNotification(notification);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="notification-container">
      <h1>Notifications</h1>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${notification.isRead ? '' : 'unread'}`}
            onClick={() => handleNotificationClick(notification)}
          >
            <h2>{notification.title}</h2>
            <p>{notification.date}</p>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} notification={selectedNotification} />
    </div>
  );
};

export default Notification;
