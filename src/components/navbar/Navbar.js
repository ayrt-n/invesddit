import React from 'react';
import logo from '../../assets/icons/invesddit-logo.svg'

function Navbar() {
  return (
    <header className="min-h-[48px] px-[20px] bg-canvas-light border-b-1 border-nav-border flex items-center">
      <img src={logo} className="w-[32px] h-[32px]" alt="invesddit logo"/>
    </header>
  );
}

export default Navbar;
