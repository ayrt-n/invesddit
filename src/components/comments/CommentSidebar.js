import React from 'react';
import { Link } from 'react-router-dom';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';
import Avatar from '../Avatar';


function CommentSidebar({ account, toggleCollapse, status }) {
  // If status is deleted, do not render link to account and render default avatar
  if (status === 'deleted') {
    return (
      <div className="flex items-center flex-col w-[24px]">
        <div className="my-[6px] min-h-[28px] min-w-[28px]">
          <img src={defaultAvatar} alt="account avatar" className="rounded-full w-[28px] h-[28px]" />
        </div>
        <div onClick={toggleCollapse} className="w-full h-full cursor-pointer bg-gradient-to-t from-canvas to-canvas bg-no-repeat bg-center hover:from-primary-500 hover:to-primary-500" style={{'backgroundSize': '2px 100%'}} />
      </div>
    );
  }

  // Otherwise, render link and user avatar (or default if user avatar does not exist)
  return (
    <div className="flex items-center flex-col w-[24px]">
      <Link to={`/profile/${account.username}`} className="my-[6px] min-h-[28px] min-w-[28px]">
        <Avatar src={account.avatar || defaultAvatar} alt={`avatar for ${account.username}`} classNames="w-[28px] h-[28px]" />
      </Link>
      <div onClick={toggleCollapse} className="w-full h-full cursor-pointer bg-gradient-to-t from-canvas to-canvas bg-no-repeat bg-center hover:from-primary-500 hover:to-primary-500" style={{'backgroundSize': '2px 100%'}} />
    </div>
  );
}

export default CommentSidebar;
