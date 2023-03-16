import React, { useState, useEffect, useRef } from 'react';
import PostDropdownMenu from './PostDropdownMenu';

function PostDropdown({ deletePost, editPost }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdown = useRef(null);

  const toggleDropdown = (event) => {
    setDropdownOpen(!dropdownOpen)
    event.stopPropagation();
  };

  // Close dropdown menu on outside click
  const closeDropdowns = (e) => {
    if (dropdown.current && dropdownOpen && !dropdown.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  }

  // Set event listener to register clicks outside of dropdown menu
  useEffect(() => {
    document.addEventListener('mousedown', closeDropdowns);
    
    return () => {
      document.removeEventListener('mousedown', closeDropdowns);
    };
  });

  return (
    <div ref={dropdown} onClick={toggleDropdown} className="relative">
      <button className="p-[8px] flex items-center justify-center rounded-[2px] hover:bg-icon-hover">
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
          <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
        </svg>
      </button>
      {dropdownOpen ?
        <PostDropdownMenu
          deletePost={deletePost}
          editPost={editPost}
        /> : 
        null
      }
    </div>
  );
}

export default PostDropdown;
