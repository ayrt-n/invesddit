import React, { useContext } from 'react';
import logo from '../../assets/icons/invesddit-logo.svg'
import brand from '../../assets/icons/invesddit-brand.png';
import PillButton from '../PillButton';
import NavDropdown from './NavDropdown';
import ModalContext from '../../contexts/modal/ModalContext';
import OnboardModal from '../OnboardModal';
import SearchBar from './SearchBar';
import NotificationsDropdown from './NotificationsDropdown';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Navbar() {
  const { openModal, closeModal } = useContext(ModalContext);
  const auth = useAuth();

  return (
    <header className="min-h-[48px] px-[20px] bg-canvas-light border-b-[1px] border-nav-border flex items-center fixed w-full z-10 justify-between fixed">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} className="w-[40px] h-[40px] min-w-[40px] min-h-[40px] pr-[8px]" alt="invesddit logo"/>
          <img src={brand} className="h-[25px] hidden md:block" alt="" />
        </Link>
      </div>
      <div className="flex items-center grow mx-auto max-w-[690px]">
        <div className="mx-[16px] w-full h-auto">
          <SearchBar />
        </div>
      </div>
      <div className="flex items-center ml-[8px] pl-[8px] border-l-[1px] border-nav-border">
        {auth.isAuthenticated ?
          <>
            <NotificationsDropdown />
            <NavDropdown logOut={auth.logOut} />
          </> :
          <>
            <PillButton onClick={() => openModal(<OnboardModal closeModal={closeModal} initialState="signup"/>)} variant="inverted" className="ml-[4px] text-[14px] whitespace-nowrap">
              Sign up
            </PillButton>
            <PillButton onClick={() => openModal(<OnboardModal closeModal={closeModal} initialState="login"/>)} className="ml-[4px] text-[14px]">
              Log In
            </PillButton>
          </>
        }
      </div>
    </header>
  );
}

export default Navbar;
