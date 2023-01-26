import React from 'react';
import logo from '../../assets/icons/invesddit-logo.svg'
import { Link } from 'react-router-dom';
import PillButton from '../PillButton';

function Navbar() {
  return (
    <header className="min-h-[48px] px-[20px] bg-canvas-light border-b-[1px] border-nav-border flex items-center fixed w-full z-10 justify-between">
      <Link to="/">
        <img src={logo} className="w-[32px] h-[32px]" alt="invesddit logo"/>
      </Link>
      <div className="flex items-center">
        <PillButton as={Link} to="/register" variant="inverted" additionalClasses="ml-[4px] text-[14px] whitespace-nowrap">
          Sign up
        </PillButton>
        <PillButton as={Link} to="/login" additionalClasses="ml-[4px] text-[14px]">
          Log In
        </PillButton>
      </div>
    </header>
  );
}

export default Navbar;
