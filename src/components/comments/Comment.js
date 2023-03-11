import React, { useState } from 'react';
import CommentMetaText from './CommentMetaText';
import CommentActions from './CommentActions';
import CollapsedCommentHeader from './CollapsedCommentHeader';
import CommentSidebar from './CommentSidebar';
import CommentReplyForm from './CommentReplyForm';

function Comment({ comment, addNestedComment }) {
  // State and toggle to collapse/uncollapse comment thread
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => { setCollapsed((prev) => !prev) };

  // State and toggle to open/close the reply to comment form
  const [replyOpen, setReplyOpen] = useState(false);
  const toggleReply = () => { setReplyOpen((prev) => !prev) };

  // Close reply form and submit this comment along with nested comments
  // (including the new/updated comment) to addNestedComment
  // This will bubble up through comment thread until it reaches the CommentSection and
  // will proceed to update the comment list from there
  const handleSubmitNestedComment = (newComment) => {
    setReplyOpen(false);

    addNestedComment(
      {
        ...comment,
        comments: [
          newComment,
          ...comment.comments.filter((comment) => comment.id !== newComment.id)
        ]
      }
    );
  };

  // Check if any nested comments
  const hasNestedComment = comment.comments.length > 0;

  return (
    <div className="pt-[8px] pl-[8px] flex">
      {collapsed ? 
        <CollapsedCommentHeader comment={comment} toggleCollapse={toggleCollapse} /> :
        <CommentSidebar account={comment.account} toggleCollapse={toggleCollapse} />
      }
      <div className={`ml-[8px] max-w-[800px] w-full ${collapsed ? 'hidden' : ''}`}>
        <CommentMetaText account={comment.account} createdAt={comment.created_at} />
        <div className="my-[2px] text-[14px] leading-[21px] break-words ">
          {comment.body}
        </div>
        <CommentActions score={comment.score} voted={comment.vote_status} id={comment.id} toggleReply={toggleReply} />

        {replyOpen ? <CommentReplyForm postId={comment.post_id} commentId={comment.id} addComment={handleSubmitNestedComment} /> : null}

        {hasNestedComment ?
          comment.comments.map((comment) => <Comment comment={comment} key={comment.id} addNestedComment={handleSubmitNestedComment} />) :
          null
        }
      </div>
    </div>
  );
}

export default Comment;
