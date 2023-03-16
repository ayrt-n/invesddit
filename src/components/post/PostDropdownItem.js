import React, { useContext } from 'react';

function PostDropdownItem({ handleClick, children }) {
  return (
    <button onClick={handleClick} className="border-t-[1px] border-nav-border text-[14px] font-semibold leading-[18px] p-[8px] whitespace-nowrap w-full flex items-center outline-none hover:bg-blue-highlight hover:text-[#1c1c1c]">
      {children}
    </button>
  );
}

export default PostDropdownItem;
