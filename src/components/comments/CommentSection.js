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

  // Add new top-level comment to list
  const addComment = (newComment) => {
    setComments((prev) => {
      return [newComment, ...prev]
    })
  };

  // Update existing list of comments
  const updateComments = (newComment) => {
    setComments((prev) => {
      return prev.map((comment) => {
        if (comment.id === newComment.id) return newComment;
        
        return comment;
      });
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
                    addNestedComment={updateComments}
                    updateComment={updateComments}
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
