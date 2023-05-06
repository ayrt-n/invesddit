import React from 'react';
import SkeletonLoader from '../SkeletonLoader';

function NotificationLoading({ underlined }) {
  const underlineStyle = underlined ? "border-b-[1px] border-nav-border last:border-b-0" : ""

  return (
    <li className={"overflow-hidden list-none " + underlineStyle}>
      <div className="flex p-[16px]">
        <span className="pr-[8px] relative shrink-0">
          <SkeletonLoader className="rounded-full h-[32px] w-[32px]" />
        </span>
        <span className="flex-1">
          <div className="mb-[4px]">
            <SkeletonLoader className="h-[14px] w-[70%]" />
          </div>
          <SkeletonLoader className="h-[54px] w-[90%]" />
        </span>
      </div>
    </li>
  );
}

export default NotificationLoading;
