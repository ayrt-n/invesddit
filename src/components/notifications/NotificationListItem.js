import React, { useContext } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';
import { Link } from 'react-router-dom';
import { readNotification } from '../../services/notificationService';
import AccountContext from '../../contexts/account/AccountContext';
import Avatar from '../Avatar';

function NotificationListItem({ notification, underlined }) {
  const { setCurrentAccount } = useContext(AccountContext )

  const createdAt = Date.parse(notification.created_at);
  const bgStyles = !notification.read ? "bg-blue-highlight" : "";
  const underlineStyle = underlined ? "border-b-[1px] border-nav-border last:border-b-0" : ""

  // On clicking a notification, if unread, mark notification as read and decrement the
  // notification count by one
  const handleClick = () => {
    if (!notification.read) {
      readNotification(notification.id).then(() => {
        setCurrentAccount(prev => (
          {
            ...prev,
            notifications: parseInt(prev.notifications) - 1
          }
        ));
      });
    }
  };

  return (
    <li className={"overflow-hidden list-none " + bgStyles + " " + underlineStyle}>
      <Link onClick={handleClick} to={`/c/${notification.details.community}/posts/${notification.details.post_id}`} className="flex p-[16px]">
        <span className="pr-[8px] relative shrink-0">
          <Avatar classNames="h-[32px] w-[32px]" src={notification.details.avatar || defaultAvatar} alt="notification avatar" />
          <span className="bg-canvas-light border-[1px] border-nav-border rounded-full h-[20px] left-[12px] absolute w-[20px] top-[18px] shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
            <svg className="text-primary-400 w-[11px] h-[11px] absolute top-[4px] left-[3px] leading-[12px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>comment</title>
              <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
            </svg>
          </span>
        </span>
        <span className="flex-1">
          <div className="mb-[4px]">
            <span className="text-[14px] leading-[21px]">
              {notification.message}
            </span>
            <span className="mx-[4px] text-[12px] leading-[16px] text-meta-text">
              •
            </span>
            <span className="text-[14px] leading-[19px] text-meta-text">
              {formatDistanceToNow(createdAt)} ago
            </span>
          </div>
          <div className="overflow-hidden text-ellipsis text-[14px] text-meta-text break-words leading-[18px] max-h-[54px]">
            {notification.details.body}
          </div>
        </span>
      </Link>
    </li>
  );
}

export default NotificationListItem;
