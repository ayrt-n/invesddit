import React from 'react';
import { useDropdown } from '../../hooks/useDropdown';

function Dropdown({ dropdownPrompt, children }) {
  const [dropdownOpen, setDropdownOpen, dropdownRef] = useDropdown();

  const toggleDropdown = (event) => {
    setDropdownOpen(!dropdownOpen)
    event.stopPropagation();
  };

  return (
    <div ref={dropdownRef} onClick={toggleDropdown} className="relative">
      <button className="p-[8px] flex items-center justify-center rounded-[2px] hover:bg-icon-hover">
        {dropdownPrompt}
      </button>
      {dropdownOpen ? children : null }
    </div>
  );
}

export default Dropdown;
