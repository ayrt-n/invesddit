import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/invesddit-logo.svg';


function CommentSidebar({ account, toggleCollapse }) {
  return (
    <div className="flex items-center flex-col w-[24px]">
      <Link to="/user" className="my-[6px] min-h-[28px] min-w-[28px]">
        <img src={logo} alt="account avatar" className="rounded-full" />
      </Link>
      <div onClick={toggleCollapse} className="w-full h-full cursor-pointer bg-gradient-to-t from-canvas to-canvas bg-no-repeat bg-center hover:from-primary-500 hover:to-primary-500" style={{'backgroundSize': '2px 100%'}} />
    </div>
  );
}

export default CommentSidebar;
