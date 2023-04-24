import React from 'react';
import useCurrentAccount from '../../hooks/useCurrentAccount';
import { useDropdown } from '../../hooks/useDropdown';
import NotificationsMenu from './NotificationsMenu';

function NotificationsDropdown() {
  const { currentAccount } = useCurrentAccount();
  const [dropdownOpen, setDropdownOpen, dropdownRef] = useDropdown();

  if (currentAccount.isLoading) return null

  return (
    <div ref={dropdownRef} className="relative">
      {currentAccount.data.notifications === 0 ?
        null :
        <span className="bg-[#ff4500] font-sans rounded-[12px] text-[#fff] font-bold text-[10px] min-w-[16px] h-[16px] px-[4px] leading-[16px] absolute w-auto flex items-center justify-center top-0 z-[1] left-[20px]">
          {currentAccount.data.notifications}
        </span>
      }
      <button aria-label='notifications menu' onClick={() => setDropdownOpen(!dropdownOpen)} className="mr-[8px] h-[32px] w-[32px] relative rounded-[4px] hover:bg-nav-icon-hov active:bg-nav-icon-active">
        <svg className="h-[20px] w-[20px] text-nav-icon align-middle leading-[20px] m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>bell-outline</title>
          <path fill="currentColor" d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" />
        </svg>
      </button>
      {dropdownOpen && <NotificationsMenu closeDropdown={() => setDropdownOpen(false)} />}
    </div>
  );
}

export default NotificationsDropdown;
