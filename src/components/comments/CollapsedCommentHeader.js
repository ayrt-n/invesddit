import React from 'react';
import CommentMetaText from './CommentMetaText';

function CollapsedCommentHeader({ comment, toggleCollapse }) {
  return (
    <div className="pt-[8px] pl-[8px] flex items-center">
      <button onClick={toggleCollapse} className="my-[6px] mr-[8px]">
        <svg className="w-[16px] h-[16px] text-primary-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>arrow-expand</title>
          <path fill="currentColor" d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z" />
        </svg>
      </button>
      <CommentMetaText account={comment.account} createdAt={comment.created_at} status={comment.status} />
    </div>
  );
}

export default CollapsedCommentHeader;
