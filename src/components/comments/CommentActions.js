import React, { useState } from 'react';
import ProtectedButton from '../ProtectedButton';
import { upvote, downvote, deleteVote } from '../../services/voteService';

function CommentActions({ voted, score, id, toggleReply }) {
  const [usersVote, setUsersVote] = useState(voted);
  const [changeInScore, setChaneInScore] = useState(0);

  const upvoteComment = () => {
    upvote('comments', id).then(() => {
      // The score changes by either +1 (in the case of a new vote, i.e., voted was null)
      // +2 (in the case of a change from downvote to upvote, i.e., voted was downvote),
      // or zero (in the case of no change)
      setChaneInScore(() => (voted === 'upvote' ? 0 : voted === null ? 1 : 2));
      setUsersVote('upvote');
    })
    .catch(err => console.error(err));
  };

  const downvoteComment = () => {
    downvote('comments', id).then(() => {
      // The score changes by either -1 (in the case of a new vote, i.e., voted was null),
      // -2 (in the case of a change from upvote to downvote, i.e., voted was upvote),
      // or zero (in the case of no change)
      setChaneInScore(() => (voted === 'downvote' ? 0 : voted === null ? -1 : -2));
      setUsersVote('downvote');
    })
    .catch(err => console.error(err));
  };

  const deleteCommentVote = () => {
    deleteVote('comments', id).then(() => {
      // Change in score is either zero (voted was originally null),
      // +1 (voted was originally upvote), or -1 (voted was originally downvote)
      setChaneInScore(() => (voted === null ? 0 : voted === 'upvote' ? -1 : 1));
      setUsersVote(null);
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="flex items-center text-[12px] font-bold leading-[16px] my-[4px] flex-nowrap text-meta-text">
      <div className="flex items-center mr-[4px]">
        {/* Comment Upvote Button */}
        {usersVote === 'upvote' ?
          <ProtectedButton onClick={deleteCommentVote} className="flex items-center justify-items-center" aria-label="upvote">
            <svg className="w-[24px] h-[24px] rounded-[2px] text-upvote hover:bg-icon-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>arrow-up-bold</title>
              <path fill="currentColor" d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" />
            </svg>
          </ProtectedButton> :
          <ProtectedButton onClick={upvoteComment} className="flex items-center justify-items-center" aria-label="upvote">
            <svg className="w-[24px] h-[24px] rounded-[2px] hover:text-upvote hover:bg-icon-hover" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z" />
            </svg>
          </ProtectedButton>
        }

        {/* Comment Score */}
        <div className="m-[4px] text-[12px] leading-[15px] font-bold text-center">
          {score + changeInScore}
        </div>

        {/* Comment Downvote Button */}
        {usersVote === 'downvote' ?
          <ProtectedButton onClick={deleteCommentVote} className="flex items-center justify-items-center" aria-label="downvote">
            <svg className="w-[24px] h-[24px] rounded-[2px] text-downvote hover:bg-icon-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>arrow-down-bold</title>
              <path fill="currentColor" d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" />
            </svg>
          </ProtectedButton> :
          <ProtectedButton onClick={downvoteComment} className="flex items-center justify-items-center" aria-label="downvote">
            <svg className="w-[24px] h-[24px] rounded-[2px] hover:text-downvote hover:bg-icon-hover" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z" />
            </svg>
          </ProtectedButton>
        }
      </div>

      {/* Reply to Comment */}
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
