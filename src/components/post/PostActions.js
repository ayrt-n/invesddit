import React, { useContext } from 'react';
import AccountContext from '../../contexts/account/AccountContext';
import { isLoggedIn } from '../../services/authService';
import PostDropdown from './PostDropdown';

function PostActions({ showPostDropdown, accountId, commentCount, deletePost, editPost }) {
  const { currentAccount } = useContext(AccountContext);

  return (
    <div className="flex min-h-[40px] items-center text-[12px] font-bold leading-[16px] pl-[4px] pr-[8px] flex-grow text-meta-text mb-[2px]">
      {/* Show comment count */}
      <div className="p-[8px] mr-[4px] flex items-center rounded-[2px] hover:bg-icon-hover">
        <svg className="w-[24px] h-[24px] mr-[6px]" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
        </svg>
        <span>
          {commentCount} Comments
        </span>
      </div>

      {/* If showPostDropdown, logged in and current user is post author, show additional actions button */}
      {(showPostDropdown && isLoggedIn() && currentAccount.id === accountId) ?
        <PostDropdown
          deletePost={deletePost}
          editPost={editPost}
        /> :
        null
      }
    </div>
  );
}

export default PostActions;
