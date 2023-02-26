import React from 'react';
import CommentForm from './CommentForm';

function CommentReplyForm({ postId, commentId, updateCommentSection }) {
  return (
    <div className="flex w-full">
      <div className="my-[16px] ml-[22px] p-[2px] grow">
        <CommentForm
          postId={postId}
          commentId={commentId}
          updateCommentSection={updateCommentSection}
          autoFocus
        />
      </div>
    </div>
  );
}

export default CommentReplyForm;
