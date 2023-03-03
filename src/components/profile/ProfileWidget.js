import React from 'react';
import format from 'date-fns/format';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';

function ProfileWidget({ account }) {
  if (!account) return null;

  return (
    <div className="relative">
      <div className="border-[1px] border-post-border rounded-[4px] p-[12px] bg-canvas-light break-words overflow-visible">
        <div className="h-[94px] rounded-t-[4px] w-[calc(100%-2px)] bg-blue-300 bg-center bg-no-repeat bg-cover absolute top-[1px] left-[1px]" style={{backgroundImage: `url(${account.banner})`}} />
        <div className="relative rounded-full bg-inherit h-[86px] w-[86px] ml-[-3px] mt-[16px] p-[4px]">
          <img className="h-full w-full rounded-full" src={account.avatar || defaultAvatar} alt="user avatar" />
        </div>
        <h1 className="text-[16px] leading-[20px] font-medium my-[4px]">
          {account.username}
        </h1>
        <p className="font-medium text-[12px] leading-[16px] mt-[4px]">
          u/{account.username}
        </p>
        <div className="my-[8px]" />
        <div className="mb-[12px]">
          <h2 className="text-[14px] font-medium leading-[18px]">
            Cake day
          </h2>
          <div className="flex items-center mt-[2px]">
            <svg className="h-[12px] text-primary-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>cake-variant-outline</title>
              <path fill="currentColor" d="M12 6C13.11 6 14 5.1 14 4C14 3.62 13.9 3.27 13.71 2.97L12 0L10.29 2.97C10.1 3.27 10 3.62 10 4C10 5.1 10.9 6 12 6M18 9H13V7H11V9H6C4.34 9 3 10.34 3 12V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V12C21 10.34 19.66 9 18 9M19 20H5V17C5.9 17 6.76 16.63 7.4 16L8.5 14.92L9.56 16C10.87 17.3 13.15 17.29 14.45 16L15.53 14.92L16.6 16C17.24 16.63 18.1 17 19 17V20M19 15.5C18.5 15.5 18 15.3 17.65 14.93L15.5 12.8L13.38 14.93C12.64 15.67 11.35 15.67 10.61 14.93L8.5 12.8L6.34 14.93C6 15.29 5.5 15.5 5 15.5V12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12V15.5Z" />
            </svg>
            <span className="text-[12px] leading-[16px] ml-[4px] text-meta-text">
              {format(
                 Date.parse(account.created_at),
                 'MMMM d, yyyy'
               )
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileWidget;
