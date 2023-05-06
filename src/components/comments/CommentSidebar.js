import React from 'react';
import { Link } from 'react-router-dom';
import { UserAvatar } from '../Avatar';


function CommentSidebar({ account, toggleCollapse, status }) {
  // If status is deleted, do not render link to account and render default avatar (e.g., no source provided)
  // Otherwise, render link and user avatar (or default if user avatar does not exist)
  return (
    <div className="flex items-center flex-col w-[24px]">
      {status === 'deleted' ?
        <div className="my-[6px] min-h-[28px] min-w-[28px]">
          <UserAvatar alt="account avatar" className="w-[28px] h-[28px]" />
        </div> :
        <Link to={`/profile/${account.username}`} className="my-[6px] min-h-[28px] min-w-[28px]">
          <UserAvatar src={account.avatar} alt={`avatar for ${account.username}`} className="w-[28px] h-[28px]" />
        </Link>
      }
      <div onClick={toggleCollapse} className="w-full h-full cursor-pointer bg-gradient-to-t from-canvas to-canvas bg-no-repeat bg-center hover:from-primary-500 hover:to-primary-500" style={{'backgroundSize': '2px 100%'}} />
    </div>
  );
}

export default CommentSidebar;
