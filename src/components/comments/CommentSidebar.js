import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/invesddit-logo.svg';


function CommentSidebar({ account, toggleCollapse }) {
  return (
    <div className="flex items-center flex-col w-[24px]">
      <Link to="/user" className="my-[6px] min-h-[28px] min-w-[28px]">
        <img src={logo} alt="account avatar" className="rounded-full" />
      </Link>
      <div onClick={toggleCollapse} className="w-[2px] mx-5 h-full bg-canvas cursor-pointer hover:bg-primary-500" />
    </div>
  );
}

export default CommentSidebar;
