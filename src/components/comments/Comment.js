import React from 'react';
import CommentMetaText from './CommentMetaText';
import CommentActions from './CommentActions';
import CollapsedCommentHeader from './CollapsedCommentHeader';
import CommentSidebar from './CommentSidebar';
import { deleteComment as deleteCommentRequest } from '../../services/commentService';
import EditCommentForm from './EditCommentForm';
import useToggle from '../../hooks/useToggle';
import CommentForm from './CommentForm';

function Comment({ comment, addNestedComment, updateComment }) {
  // State and toggles to edit comment, collapse/uncollapse thread and open reply form
  const [isEditing, toggleEditting] = useToggle(); 
  const [collapsed, toggleCollapse] = useToggle();
  const [replyOpen, toggleReply] = useToggle();

  // Check if any nested comments
  const hasNestedComment = comment.comments.length > 0;

  // Close reply form, add current comment id to the stack trace and pass new comment plus stack trace to addNestedComment 
  const handleSubmitNestedComment = (newComment, stackTrace=[]) => {
    if (replyOpen) toggleReply();

    stackTrace.push(comment.id)
    addNestedComment(newComment, stackTrace)
  };

  // Add current comment id to the stack trace and pass updated comment plus stack trace to updateComment
  const handleUpdate = (updatedComment, stackTrace=[]) => {
    stackTrace.push(comment.id);
    updateComment(updatedComment, stackTrace);
  };

  // Queries API to delete the current comment
  // If successfully deleted, update comment with deleted values
  const deleteComment = () => {
    deleteCommentRequest(comment.id).then(() => {
      handleUpdate(
        {
          ...comment,
          body: '[removed]',
          status: 'deleted',
          account: null,
        }
      )
    })
    .catch(err => {
      console.error(err);
    });
  };

  return (
    <div className="pt-[8px] pl-[8px] flex">
      {/* Comment Header / Meta Text depending on collapsed state */}
      {collapsed ? 
        <CollapsedCommentHeader comment={comment} toggleCollapse={toggleCollapse} /> :
        <CommentSidebar account={comment.account} toggleCollapse={toggleCollapse} status={comment.status} />
      }

      {/* Comment Content - Hidden if collapsed state is truthy */}
      <div className={`ml-[8px] max-w-[800px] w-full ${collapsed ? 'hidden' : ''}`}>
        <CommentMetaText account={comment.account} createdAt={comment.created_at} status={comment.status} />

        {isEditing ?
          <EditCommentForm
            comment={comment}
            closeEdit={toggleEditting}
            updateCommentContent={handleUpdate}
          /> :
          <div className="my-[2px] text-[14px] leading-[21px] break-words ">
            {comment.body}
          </div>
        }

        {/* Comment actions dropdown, including actions for voting, editing, or deleting */}
        <CommentActions
          score={comment.score}
          voted={comment.vote_status}
          id={comment.id}
          accountId={comment.account?.id}
          deleteComment={deleteComment}
          editComment={toggleEditting}
          toggleReply={toggleReply}
        />

        {/* Form to reply to comment, rendered if toggled open */}
        {replyOpen ?
            <div className="flex w-full">
              <div className="my-[16px] ml-[22px] p-[2px] grow">
                <CommentForm
                  postId={comment.post_id}
                  commentId={comment.id}
                  addComment={handleSubmitNestedComment}
                  autoFocus
                />
              </div>
            </div> :
            null
          }

        {/* If has nested comments, map through and render */}
        {hasNestedComment ?
          comment.comments.map((comment) => <Comment comment={comment} key={comment.id} addNestedComment={handleSubmitNestedComment} updateComment={handleUpdate} />) :
          null
        }
      </div>
    </div>
  );
}

export default Comment;
