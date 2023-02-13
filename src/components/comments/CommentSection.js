import React, { useState, useEffect } from 'react';
import CommentController from './CommentController';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { getComments } from '../../services/commentService';
import NoCommentsMessage from './NoCommentsMessage';

function CommentSection({ postId }) {
  const [comments, setComments] = useState(null);
  const [sortBy, setSortBy] = useState('best');

  useEffect(() => {
    let searchParams = { sort_by: sortBy }

    getComments(postId, searchParams).then(data => setComments(data.data));
  }, [postId, sortBy]);

  const updateCommentSection = (newComment) => {
    setComments((prev) => {
      return [ newComment, ...prev ]
    })
  };

  if (!comments) return null;

  return (
    <>
      <div className="my-[24px] mr-[40px] ml-[48px]">
        <CommentForm postId={postId} updateCommentSection={updateCommentSection} />
      </div>
      <div className="border-b-[1px] mx-[48px] mb-[4px] pr-[16px]">
        <CommentController sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="pr-[16px] pb-[16px] mt-[16px] mr-[16px] ml-[10px]">
        {comments.length > 0 ?
          <>
            {comments.map((comment) => {
              return (
                <div className="mt-[16px]" key={comment.id}>
                  <Comment comment={comment} />
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
