import React, { useState, useRef, useEffect, useContext } from 'react';
import logo from '../../assets/icons/invesddit-logo.svg'
import { Link } from 'react-router-dom';
import PillButton from '../PillButton';
import NavDropdown from './NavDropdown';
import NavDropdownMenu from './NavDropdownMenu';
import { isLoggedIn } from '../../services/authService';
import brand from '../../assets/icons/invesddit-brand.png';
import ModalContext from '../../contexts/modal/ModalContext';
import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';

function Navbar() {
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

  // Use modal context to open sign up or login modals
  const { openModal } = useContext(ModalContext);

  return (
    <header className="min-h-[48px] px-[20px] bg-canvas-light border-b-[1px] border-nav-border flex items-center fixed w-full z-10 justify-between fixed">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img src={logo} className="w-[40px] h-[40px] pr-[8px]" alt="invesddit logo"/>
          <img src={brand} className="h-[25px] hidden md:block" alt="" />
        </a>
      </div>
      <div className="flex items-center">
        {isLoggedIn() ?
          <div ref={dropdown} onClick={toggleDropdown}>
            <NavDropdown />
            {dropdownOpen ? <NavDropdownMenu /> : null}
          </div> :
          <>
            <PillButton onClick={() => openModal(<SignUpForm/>)} variant="inverted" additionalClasses="ml-[4px] text-[14px] whitespace-nowrap">
              Sign up
            </PillButton>
            <PillButton onClick={() => openModal(<LoginForm/>)} additionalClasses="ml-[4px] text-[14px]">
              Log In
            </PillButton>
          </>
        }
      </div>
    </header>
  );
}

export default Navbar;
