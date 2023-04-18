import React from 'react';
import CommentMetaText from './CommentMetaText';
import CommentActions from './CommentActions';
import CollapsedCommentHeader from './CollapsedCommentHeader';
import CommentSidebar from './CommentSidebar';
import CommentReplyForm from './CommentReplyForm';
import { deleteComment as deleteCommentAPI } from '../../services/commentService';
import EditCommentForm from './EditCommentForm';
import useToggle from '../../hooks/useToggle';

function Comment({ comment, addNestedComment, updateComment }) {
  // State and toggles to edit comment, collapse/uncollapse thread and open reply form
  const [isEditing, toggleEditting] = useToggle(); 
  const [collapsed, toggleCollapse] = useToggle();
  const [replyOpen, toggleReply] = useToggle();

  // Check if any nested comments
  const hasNestedComment = comment.comments.length > 0;

  // Close reply form and submit this comment along with nested comments
  // (including the new/updated comment) to addNestedComment
  // This will bubble up through comment thread until it reaches the CommentSection and
  // will proceed to update the comment state from there
  const handleSubmitNestedComment = (newComment) => {
    if (replyOpen) toggleReply();

    addNestedComment(
      {
        ...comment,
        comments: [
          newComment,
          ...comment.comments.filter((c) => c.id !== newComment.id)
        ]
      }
    );
  };

  // Handle update of existing comment/comment threads
  // This will bubble up through comment thread until it reaches the CommentSection and
  // will proceed to update the comment state from there
  const handleUpdate = (replacementComment) => {
    // If current comment is the comment to be replaced then replace and pass upwards
    if (comment.id === replacementComment.id) {
      updateComment(replacementComment);

      return;
    }

    // Otherwise, pass the current comment with the replacement comment as nested comment to maintain the changes
    updateComment(
      {
        ...comment,
        comments: comment.comments.map((c) => {
                    if (c.id === replacementComment.id) return replacementComment;

                    return c;
                  })
      }
    );
  }

  // Queries API to delete the current comment (i.e., the comment that this component has rendered)
  const deleteCurrentComment = () => {
    // If successfully deleted, pass a mock deleted comment to function to update the commentSection state
    deleteCommentAPI(comment.id).then(() => {
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

        <CommentActions
          score={comment.score}
          voted={comment.vote_status}
          id={comment.id}
          accountId={comment.account?.id}
          deleteComment={deleteCurrentComment}
          editComment={toggleEditting}
          toggleReply={toggleReply}
        />

        {replyOpen ? <CommentReplyForm postId={comment.post_id} commentId={comment.id} addComment={handleSubmitNestedComment} /> : null}

        {hasNestedComment ?
          comment.comments.map((comment) => <Comment comment={comment} key={comment.id} addNestedComment={handleSubmitNestedComment} updateComment={handleUpdate} />) :
          null
        }
      </div>
    </div>
  );
}

export default Comment;
