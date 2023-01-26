import React from 'react';
import logo from '../../assets/icons/invesddit-logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="min-h-[48px] px-[20px] bg-canvas-light border-b-[1px] border-nav-border flex items-center fixed w-full z-10">
      <Link to="/">
        <img src={logo} className="w-[32px] h-[32px]" alt="invesddit logo"/>
      </Link>
    </header>
  );
}

export default Navbar;
