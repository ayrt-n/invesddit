import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getNotifications } from '../../services/notificationService';
import NotificationListItem from '../notifications/NotificationListItem';
import { readAllNotification } from '../../services/notificationService';
import AccountContext from '../../contexts/account/AccountContext';
import EmptyNotifications from '../notifications/EmptyNotifications';

function NotificationsMenu({ closeDropdown }) {
  const { currentAccount, setCurrentAccount } = useContext(AccountContext )
  const [notifications, setNotifications] = useState(null);

  // Query for and display the first five notifications
  useEffect(() => {
    getNotifications({ page: 1, limit: 5 }).then(data => {
      setNotifications(data.data);
    });
  }, []);

  const markAllAsRead = () => {
    // If no unread notifications, return immediately and do not call API
    if (notifications.length === 0 || currentAccount.notifications === 0) return;

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
    <div className="fixed top-[50px] right-[20px] max-w-[375px] w-full bg-canvas-light rounded-[4px] border-[1px] border-nav-border overflow-y-auto overflow-x-hidden z-[80]">
      <div className="mt-[8px] flex justify-between items-center p-[16px]">
        <span className="text-[14px] font-medium leading-[18px] text-ellipsis whitespace-nowrap mr-[12px] overflow-hidden">
          Notifications
        </span>
        <button onClick={markAllAsRead} className="text-meta-text ml-[8px] flex items-center">
          <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>mark-as-read</title>
            <path fill="currentColor" d="M18.84,7H16.22L10.5,4L4,7.41V17A2,2 0 0,1 2,15V7.17C2,6.5 2.28,6.06 2.81,5.81L10.5,2L18.05,5.81C18.5,6.09 18.78,6.5 18.84,7M7,8H20A2,2 0 0,1 22,10V19A2,2 0 0,1 20,21H7A2,2 0 0,1 5,19V10A2,2 0 0,1 7,8M20,11.67V10L13.5,13.31L7,10V11.67L13.5,15L20,11.67Z" />
          </svg>
        </button>
      </div>
      {notifications.length > 0 ?
        <>
          <div className="max-h-[407px] h-full overflow-x-hidden overflow-y-auto">
            <ul onClick={closeDropdown}>
              {notifications.map((notification) => (<NotificationListItem key={notification.id} notification={notification} />))}
            </ul>
          </div>
          <div className="flex items-center justify-center h-[49px] bg-comment-controls px-[12px]">
            <Link onClick={closeDropdown} to="/notifications" className="text-primary-400 text-[14px] font-bold tracking-[0.5px] leading-[32px] overflow-hidden whitespace-nowrap">
              SEE ALL
            </Link>
          </div>
        </> :
        <EmptyNotifications />
      }
    </div>
  );
}

export default NotificationsMenu;
