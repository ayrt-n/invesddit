import React, { useState, useEffect, useContext } from 'react';
import NotificationListItem from './NotificationListItem';
import { getNotifications } from '../../services/notificationService';
import { readAllNotification } from '../../services/notificationService';
import AccountContext from '../../contexts/account/AccountContext';

function NotificationDashboard() {
  const { setCurrentAccount } = useContext(AccountContext);
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    getNotifications().then(data => {
      console.log(data.data);
      setNotifications(data.data);
    })
  }, [])

  const markAllAsRead = () => {
    readAllNotification().then(() => {
      // Set notification read status to true
      setNotifications(notifications.map(n => ({ ...n, read: true })));

      // Set notification count to 0
      setCurrentAccount(prev => (
        {
          ...prev,
          notifications: 0
        }
      ));
    })
    .catch(err => console.error(err));
  };

  if (!notifications) return null;

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-full flex justify-center">
        <div className="max-w-[640px] w-full">
          <div className="h-[131px] mx-auto max-w-[648px] flex flex-wrap items-center justify-between">
            <h1 className="text-[22px] font-medium leading-[26px] mr-[8px]">
              Notifications
            </h1>
            <button onClick={markAllAsRead} className="text-[14px] font-bold text-meta-text flex items-center hover:text-[#1c1c1c]">
              <svg className="w-[20px] h-[20px] mr-[4px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>mark-as-read</title>
                <path fill="currentColor" d="M18.84,7H16.22L10.5,4L4,7.41V17A2,2 0 0,1 2,15V7.17C2,6.5 2.28,6.06 2.81,5.81L10.5,2L18.05,5.81C18.5,6.09 18.78,6.5 18.84,7M7,8H20A2,2 0 0,1 22,10V19A2,2 0 0,1 20,21H7A2,2 0 0,1 5,19V10A2,2 0 0,1 7,8M20,11.67V10L13.5,13.31L7,10V11.67L13.5,15L20,11.67Z" />
              </svg>
              Mark all as read
            </button>
          </div>
          <div className="py-[20px] flex justify-center mx-auto">
            <div className="flex-[1_1_100%]">
              <div className="bg-canvas-light rounded-[4px] mx-auto overflow-hidden">
                <ul>
                  {notifications.length > 0 ?
                    notifications.map((notification) => (<NotificationListItem key={notification.id} notification={notification} underlined />)) :
                    null
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationDashboard;
