import React, { useState, useRef, useCallback } from 'react';
import NotificationListItem from './NotificationListItem';
import { getNotifications } from '../../services/notificationService';
import { readAllNotification } from '../../services/notificationService';
import usePagination from '../../hooks/usePagination';
import NotificationLoading from './NotificationLoading';
import EmptyNotifications from './EmptyNotifications';
import useCurrentAccount from '../../hooks/useCurrentAccount';
import ContentCard from '../ContentCard';

function NotificationDashboard() {
  const { currentAccount, setCurrentAccount } = useCurrentAccount();
  const [page, setPage] = useState(1);
  const {
    list,
    setList,
    hasMore,
    isLoading
  } = usePagination(getNotifications, page)

  const observer = useRef();
  const lastNotificationRef = useCallback((node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const markAllAsRead = () => {
    // If no unread notifications, return immediately and do not call API
    if (list.length === 0 || (currentAccount.data && currentAccount.data.notifications === 0)) return;

    readAllNotification().then(() => {
      // Set notification read status to true
      setList(list.map(n => ({ ...n, read: true })));

      // Set notification count to 0
      setCurrentAccount(prev => (
        {
          ...prev,
          data: {
            ...prev.data,
            notifications: 0
          }
        }
      ));
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-full flex justify-center">
        <div className="max-w-[640px] w-full">
          <div className="mx-auto max-w-[648px] flex flex-wrap items-center justify-between pt-[40px] pb-[21px]">
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
              <ContentCard className="mx-auto border-0">
                <ul>
                  {isLoading && page === 1 ?
                    <ul>
                      <NotificationLoading underlined={true} />
                      <NotificationLoading underlined={true} />
                      <NotificationLoading underlined={true} />
                    </ul> :
                  list.length > 0 ?
                    list.map((notification, index) => {
                      if (list.length === index + 1) {
                        return (
                          <div key={notification.id} ref={lastNotificationRef}>
                            <NotificationListItem key={notification.id} notification={notification} underlined />
                          </div>
                        );
                      } else {
                        return (
                          <NotificationListItem key={notification.id} notification={notification} underlined />
                        );
                      }
                    }) :
                    <EmptyNotifications />
                  }
                </ul>
              </ContentCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationDashboard;
