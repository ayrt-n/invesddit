import React, { useState, useEffect, useRef } from 'react';

function Dropdown({ dropdownPrompt, children }) {
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
        {dropdownPrompt}
      </button>
      {dropdownOpen ? children : null }
    </div>
  );
}

export default Dropdown;
