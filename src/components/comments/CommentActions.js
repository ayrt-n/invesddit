import React from 'react';

function CommentActions({ score, id, toggleReply }) {
  return (
    <div className="flex items-center text-[12px] font-bold leading-[16px] my-[4px] flex-nowrap text-meta-text">
      <div className="flex items-center mr-[4px]">
        <button className="flex items-center justify-items-center" aria-label="upvote">
          <svg className="w-[24px] h-[24px] rounded-[2px] hover:text-upvote hover:bg-icon-hover" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z" />
          </svg>
        </button>
        <div className="m-[4px] text-[12px] leading-[15px] font-bold text-center">
          {score}
        </div>
        <button aria-label="downvote">
          <svg className="w-[24px] h-[24px] rounded-[2px] hover:text-downvote hover:bg-icon-hover" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z" />
          </svg>
        </button>
      </div>
      <button onClick={toggleReply} className="p-[8px] mr-[4px] flex items-center rounded-[2px] hover:bg-icon-hover">
        <svg className="w-[24px] h-[24px] mr-[6px]" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
        </svg>
        <span>
          Reply
        </span>
      </button>
    </div>
  );
}

export default CommentActions;
