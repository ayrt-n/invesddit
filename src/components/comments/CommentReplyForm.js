import React from 'react';
import CommentForm from './CommentForm';

function CommentReplyForm() {
  return (
    <div className="flex w-full">
      <div className="my-[16px] ml-[22px] p-[2px] grow">
        <CommentForm autoFocus />
      </div>
    </div>
  );
}

export default CommentReplyForm;
