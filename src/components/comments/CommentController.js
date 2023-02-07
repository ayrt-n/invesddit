import React, { useState, useRef, useEffect } from 'react';

function CommentController({ sortBy, setSortBy }) {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Toggle menu open/closed
  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  };

  // Handle click/selection from menu options
  const handleMenuClick = (option) => {
    setSortBy(option);
    setMenuOpen(false);
  };

  // Handle clicks outside of menu
  useEffect(() => {
    // Event listener to determine if clicked outside of menu and to close menu
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (menuOpen) { setMenuOpen(false); }
      }
    }

    // Bind event listener and return to remove after unmounting
    document.addEventListener('mousedown', handleClickOutside);
    return () => { document.removeEventListener('mousedown', handleClickOutside); }
  }, [menuRef])

  return (
    <div className="py-[4px] pr-[8px]">
      <div className="cursor-pointer relative w-min whitespace-nowrap" ref={menuRef}>
        <button onClick={toggleMenu} className="text-primary-500 text-[12px] font-bold leading-[16px] flex items-center capitalize">
          Sort By: {sortBy}
          <svg className="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>menu-down</title>
            <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
          </svg>
        </button>
        
        {menuOpen ?
          <div className="absolute top-full border-[1px] border-nav-border rounded-[4px] shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)] overflow-hidden z-[50] bg-canvas-light w-full flex flex-col">
            <button onClick={() => handleMenuClick('best')} className={`font-medium align-center text-feed-text text-[14px] leading-[18px] p-[8px] hover:bg-sky-100 w-full text-left ${sortBy === 'best' ? 'text-primary-500' : 'text-feed-text hover:text-neutral-900'}`}>
              Best
            </button>
            <button onClick={() => handleMenuClick('new')} className={`font-medium align-center text-feed-text text-[14px] leading-[18px] p-[8px] hover:bg-sky-100 w-full text-left ${sortBy === 'new' ? 'text-primary-500' : 'text-feed-text hover:text-neutral-900'}`}>
              New
            </button>
            <button onClick={() => handleMenuClick('top')} className={`font-medium align-center text-feed-text text-[14px] leading-[18px] p-[8px] hover:bg-sky-100 w-full text-left ${sortBy === 'top' ? 'text-primary-500' : 'text-feed-text hover:text-neutral-900'}`}>
              Top
            </button>
          </div> :
          null
        }
      </div>
    </div>
  );
}

export default CommentController;
