import React from 'react';

function NavDropdownSection({ children }) {
  return (
    <div className="border-b-[1px] border-nav-border mb-[12px] pb-[12px]">
      {children}
    </div>
  );
}

export default NavDropdownSection;
