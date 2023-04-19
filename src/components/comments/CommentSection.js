import React, { useState } from 'react';
import CommentController from './CommentController';
import CommentForm from './CommentForm';
import Comment from './Comment';
import NoCommentsMessage from './NoCommentsMessage';
import useFetch from '../../hooks/useFetch';
import CommentLoading from './CommentLoading';

function CommentSection({ postId }) {
  const [sortBy, setSortBy] = useState('best');
  const [comments, setComments] = useFetch(`api/v1/posts/${postId}/comments`, { sort_by: sortBy });

  // Add comment by appending new comment to comments state
  const addComment = (newComment, stackTrace=[]) => {
    setComments((prev) => {
      return recursivelyAddComment(prev, newComment, stackTrace);
    })
  };

  // Recursively add comments, given a comment thread, new comment, and stack trace of comment
  // ids to find the right position to place the new comment 
  const recursivelyAddComment = (commentThread, newComment, stackTrace) => {
    // If stack trace is zero, no more comments to traverse and can append new comment
    if (stackTrace.length === 0) return [newComment, ...commentThread];
    
    // Otherwise, pop current id from stack trace and map through comment thread
    const current = stackTrace.pop();
    return commentThread.map((c) => {
      if (c.id === current) {
        return {
          ...c,
          comments: recursivelyAddComment(c.comments, newComment, stackTrace)
        };
      }

      return c;
    });
  };

  // Update existing comments via comments state
  const updateComment = (updatedComment, stackTrace) => {
    setComments((prev) => {
      return recursivelyUpdateComments(prev, updatedComment, stackTrace);
    });
  };

  // Recursively update comments, given comment threa, updated comment, and stack trace of comment
  // ids to find the right position of the comment to be updated
  const recursivelyUpdateComments = (commentThread, updatedComment, stackTrace) => {
    // Pop the current id from the stack trace
    const current = stackTrace.pop();

    // Map through comment thread, if stack trace is empty and comment id equals current, this is the comment to update
    // If comment id equals current then continue to traverse the comment thread
    // Otherwise, return full comment without any changes
    return commentThread.map((c) => {
      if (stackTrace.length === 0 && c.id === current) return updatedComment;

      if (c.id === current) {
        return {
          ...c,
          comments: recursivelyUpdateComments(c.comments, updatedComment, stackTrace)
        };
      }

      return c;
    });
  };

  return (
    <>
      <div className="my-[24px] mr-[40px] ml-[48px]">
        <CommentForm postId={postId} addComment={addComment} />
      </div>
      <div className="border-b-[1px] mx-[48px] mb-[4px] pr-[16px]">
        <CommentController sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="pr-[16px] pb-[16px] mt-[16px] mr-[16px] ml-[10px]">
        {comments.isLoading ?
        <>
          <CommentLoading />
          <CommentLoading />
          <CommentLoading />
        </> :
        comments.data.length > 0 ?
          <>
            {comments.data.map((comment) => {
              return (
                <div className="mt-[16px]" key={comment.id}>
                  <Comment
                    comment={comment}
                    addNestedComment={addComment}
                    updateComment={updateComment}
                  />
                </div>
              );
            })}
          </> :
          <NoCommentsMessage />
        }
      </div>
    </>
  );
}

export default CommentSection;
