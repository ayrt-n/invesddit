import React, { useContext } from 'react';
import logo from '../../assets/icons/invesddit-logo.svg'
import PillButton from '../PillButton';
import NavDropdown from './NavDropdown';
import NavDropdownMenu from './NavDropdownMenu';
import { isLoggedIn } from '../../services/authService';
import brand from '../../assets/icons/invesddit-brand.png';
import ModalContext from '../../contexts/modal/ModalContext';
import OnboardModal from '../OnboardModal';
import SearchBar from './SearchBar';
import AccountContext from '../../contexts/account/AccountContext';
import Notifications from './Notifications';
import { useDropdown } from '../../hooks/useDropdown';

function Navbar() {
  // Account context for notifications and dropdown menu
  const { currentAccount } = useContext(AccountContext);

  // Use modal context to open sign up or login modals
  const { openModal } = useContext(ModalContext);

  // useDropdown hook to power nav dropdown menu
  const [dropdownOpen, setDropdownOpen, dropdownRef] = useDropdown();

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
            <Notifications notifications />
            <div ref={dropdownRef} onClick={() => setDropdownOpen(!dropdownOpen)}>
              <NavDropdown currentAccount={currentAccount} />
              {dropdownOpen ? <NavDropdownMenu currentAccount={currentAccount} /> : null}
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
