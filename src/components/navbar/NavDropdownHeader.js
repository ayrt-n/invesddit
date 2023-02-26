import React from 'react';

function NavDropdownHeader({ children }) {
  return (
    <div className="h-[40px] w-full text-dropdown-category">
      <span className="flex items-center h-full px-[20px]">
        {children}
      </span>
    </div>
  );
}

export default NavDropdownHeader;
