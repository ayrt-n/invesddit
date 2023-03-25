import React from 'react';
import ProtectedButton from '../ProtectedButton';
import { upvote, downvote, deleteVote } from '../../services/voteService';

function PostSidebar({ id, score, voted, updatePostVoteStatus, preview }) {
  // Background color changes if user is viewing full post or just preview
  const bgColor = preview ? 'bg-post-sidebar' : 'bg-canvas-light'

  const upvotePost = (event) => {
    // The score changes by either 1 (in the case of a new vote, i.e., voted was null)
    // Or by 2 (in the case of a change from downvote to upvote, i.e., voted was downvote)
    const changeInScore = voted === null ? 1 : 2

    upvote('posts', id).then(() => {
      updatePostVoteStatus(id, 'upvote', changeInScore);
    })
    .catch(err => console.error(err));

    event.stopPropagation();
  };

  const downvotePost = (event) => {
    // The score changes by either -1 (in the case of a new vote, i.e., voted was null)
    // Or by -2 (in the case of a change from upvote to downvote, i.e., voted was upvote)
    const changeInScore = voted === null ? -1 : -2

    downvote('posts', id).then(() => {
      updatePostVoteStatus(id, 'downvote', changeInScore);
    })
    .catch(err => console.error(err));

    event.stopPropagation();
  };

  const deletePostVote = (event) => {
    // Change in score is either -1 (remove an upvote) or +1 (remove a downvote)
    const changeInScore = voted === 'upvote' ? -1 : 1

    deleteVote('posts', id).then(() => {
      updatePostVoteStatus(id, null, changeInScore);
    })
    .catch(err => console.error(err));

    event.stopPropagation();
  };

  // Call to action if unauthorized user tries to vote on a post
  const callToAction = 'You can vote to help everyone find the best content with an Invesddit account.';

  return (
    <div className={`${bgColor} min-w-[40px] flex flex-col items-center py-[8px] rounded-tl-[4px] rounded-bl-[4px]`}>
      {/* Upvote button - Filled in if account has voted === upvote */}
      {voted === 'upvote' ?
        <ProtectedButton onClick={deletePostVote} callToAction={callToAction} className="flex items-center justify-items-center relative" aria-label="upvote">
          <svg className="w-[24px] h-[24px] rounded-[2px] text-upvote hover:bg-icon-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>arrow-up-bold</title>
            <path fill="currentColor" d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" />
          </svg>
        </ProtectedButton> :
        <ProtectedButton onClick={upvotePost} callToAction={callToAction} className="flex items-center justify-items-center relative" aria-label="upvote">
          <svg className="w-[24px] h-[24px] rounded-[2px] hover:text-upvote hover:bg-icon-hover" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z" />
          </svg>
        </ProtectedButton>
      }

      {/* Posts total score (upvotes - downvotes) */}
      <div className={`my-[4px] text-[12px] leading-[16px] font-bold text-center ${voted ? `text-${voted}` : ''}`}>
        {score}
      </div>

      {/* Downvote button - Filled in if account has voted === downvote */}
      {voted === 'downvote' ?
        <ProtectedButton onClick={deletePostVote} callToAction={callToAction} className="flex items-center justify-items-center relative" aria-label="downvote">
          <svg className="w-[24px] h-[24px] rounded-[2px] text-downvote hover:bg-icon-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>arrow-down-bold</title>
            <path fill="currentColor" d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" />
          </svg>
        </ProtectedButton> :
        <ProtectedButton onClick={downvotePost} callToAction={callToAction} className="flex items-center justify-items-center relative" aria-label="downvote">
          <svg className="w-[24px] h-[24px] rounded-[2px] hover:text-downvote hover:bg-icon-hover" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z" />
          </svg>
        </ProtectedButton>
      }
    </div>
  );
}

export default PostSidebar;
