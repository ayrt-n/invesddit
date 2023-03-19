import { useState, useEffect, useRef } from 'react';

export function useDropdown() {
    // Dropdown state and references
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

  // Close dropdown menu on outside click
  const closeDropdowns = (e) => {
    if (dropdownRef.current && dropdownOpen && !dropdownRef.current.contains(e.target)) {
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

  return [dropdownOpen, setDropdownOpen, dropdownRef];
};
