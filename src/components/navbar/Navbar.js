import React, { useState, useRef, useEffect, useContext } from 'react';
import logo from '../../assets/icons/invesddit-logo.svg'
import PillButton from '../PillButton';
import NavDropdown from './NavDropdown';
import NavDropdownMenu from './NavDropdownMenu';
import { isLoggedIn } from '../../services/authService';
import brand from '../../assets/icons/invesddit-brand.png';
import ModalContext from '../../contexts/modal/ModalContext';
import OnboardModal from '../OnboardModal';
import SearchBar from './SearchBar';

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
      <div className="flex items-center grow mx-auto max-w-[690px]">
        <div className="mx-[16px] w-full h-auto">
          <SearchBar />
        </div>
      </div>
      <div className="flex items-center ml-[8px] pl-[8px] border-l-[1px] border-nav-border">
        {isLoggedIn() ?
          <>
            <button className="mr-[8px] h-[32px] w-[32px] relative rounded-[4px] hover:bg-nav-icon-hov active:bg-nav-icon-active">
              <svg className="h-[20px] w-[20px] text-nav-icon align-middle leading-[20px] m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>bell-outline</title>
                <path fill="currentColor" d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" />
              </svg>
            </button>
            <div ref={dropdown} onClick={toggleDropdown}>
              <NavDropdown />
              {dropdownOpen ? <NavDropdownMenu /> : null}
            </div>
          </> :
          <>
            <PillButton onClick={() => openModal(<OnboardModal initialState="signup"/>)} variant="inverted" additionalClasses="ml-[4px] text-[14px] whitespace-nowrap">
              Sign up
            </PillButton>
            <PillButton onClick={() => openModal(<OnboardModal initialState="login"/>)} additionalClasses="ml-[4px] text-[14px]">
              Log In
            </PillButton>
          </>
        }
      </div>
    </header>
  );
}

export default Navbar;
