import React from 'react';

function DropdownMenu({ children }) {
  return (
    <div className="border-[1px] rounded-[4px] border-nav-border overflow-hidden absolute z-[10] bg-canvas-light shadow-[0_2px_4px_0_rgba(28,28,28,0.2)]">
      {children}
    </div>
  )
}

export default DropdownMenu;
