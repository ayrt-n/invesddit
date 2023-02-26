import React, { useState, useContext, useRef, useEffect } from 'react';
import logo from '../../assets/icons/invesddit-logo.svg'
import { Link } from 'react-router-dom';
import PillButton from '../PillButton';
import AuthContext from '../../contexts/authentication/AuthContext';
import NavDropdown from './NavDropdown';
import NavDropdownMenu from './NavDropdownMenu';

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdown = useRef(null);

  const toggleDropdown = () => { setDropdownOpen(!dropdownOpen) }

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
    <header className="min-h-[48px] px-[20px] bg-canvas-light border-b-[1px] border-nav-border flex items-center fixed w-full z-10 justify-between fixed">
      <Link to="/" className="flex items-center">
        <img src={logo} className="w-[40px] h-[40px] pr-[8px]" alt="invesddit logo"/>
      </Link>
      <div className="flex items-center">
        {loggedIn ?
          <div ref={dropdown} onClick={toggleDropdown}>
            <NavDropdown />
            {dropdownOpen ? <NavDropdownMenu /> : null}
          </div> :
          <>
            <PillButton as={Link} to="/signup" variant="inverted" additionalClasses="ml-[4px] text-[14px] whitespace-nowrap">
              Sign up
            </PillButton>
            <PillButton as={Link} to="/login" additionalClasses="ml-[4px] text-[14px]">
              Log In
            </PillButton>
          </>
        }
      </div>
    </header>
  );
}

export default Navbar;
