import React from 'react';

function EmptyPost() {
  return (
    <div className="overflow-hidden rounded-[4px] relative border-[1px] border-post-border z-0 bg-post-transparent-20 mb-[-1px] text-feed-text">
      <div className="w-[40px] ml-[4px] flex flex-col items-center py-[8px] pr-[4px]">
        <div className="flex flex-col items-center">
          <span>
            <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z" />
            </svg>
          </span>
          <div className="h-[19px]" />
          <span>
            <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z" />
            </svg>
          </span>
        </div>
      </div>
      <div />
    </div>
  );
}

export default EmptyPost;
