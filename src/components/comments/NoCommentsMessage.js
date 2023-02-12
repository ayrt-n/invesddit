import React from 'react';

function NoCommentsMessage() {
  return (
    <div className="items-center flex flex-col justify-center min-h-[340px]">
      <svg className="h-[28px] w-[28px] mb-[20px] text-community-button-alpha40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>comment-multiple</title>
        <path fill="currentColor" d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15Z" />
      </svg>
      <p className="text-[18px] font-medium leading-[22px] mb-[12px] text-meta-text">
        No Comments Yet
      </p>
      <p className="text-[14px] text-meta-text font-medium leading-[18px] opacity-[0.6]">
        Be the first to share what you think!
      </p>
    </div>
  );
}

export default NoCommentsMessage;
