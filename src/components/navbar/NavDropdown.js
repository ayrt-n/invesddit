import React from 'react';
import { UserAvatar } from '../Avatar';
import { useDropdown } from '../../hooks/useDropdown';
import NavDropdownMenu from './NavDropdownMenu';

function NavDropdown({ currentAccount, logOut }) {
  const [dropdownOpen, setDropdownOpen, dropdownRef] = useDropdown();

  if (!currentAccount) return null;

  return (
    <div ref={dropdownRef} onClick={() => setDropdownOpen(!dropdownOpen)}>
      <button aria-label="menu" onClick={() => setDropdownOpen(true)} className="min-h-[32px] max-w-[200px] border-[1px] border-transparent hover:border-nav-border focus:border-nav-border focus:outline-none rounded-[4px] ml-[8px] flex items-center text-left w-full cursor-pointer">
        <span className="flex items-center ml-[8px] max-w-full overflow-hidden">
          <div className="mr-[5px] h-full min-w-[24px] flex-none">
            <UserAvatar classNames="h-[24px] w-[24px] border-[1px] border-nav-border" src={currentAccount.avatar} alt="your avatar" />
          </div>
          <span className="text-[14px] font-medium nowrap mr-[5px] hidden md:block text-ellipsis max-w-[134px]">
            {currentAccount.username}
          </span>
        </span>
        <svg className=" flex-none h-[20px] w-[20px] align-middle text-feed-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>chevron-down</title>
          <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </button>
      {dropdownOpen ? <NavDropdownMenu currentAccount={currentAccount} logOut={logOut} /> : null}
    </div>
  );
}

export default NavDropdown;
