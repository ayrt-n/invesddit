import React from 'react';

function CommentController() {
  return (
    <div className="py-[4px] pr-[8px]">
      <div className="flex items-center text-primary-500 cursor-pointer">
        <button className="text-[12px] font-bold leading-[16px]">
          Sort By: Top (Suggested)
        </button>
        <svg className="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>menu-down</title>
          <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
        </svg>
      </div>
    </div>
  );
}

export default CommentController;
