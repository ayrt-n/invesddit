import React, { useState, useEffect } from 'react';
import NavDropdownHeader from './NavDropdownHeader';
import NavDropdownItem from './NavDropdownItem';
import NavDropdownSection from './NavDropdownSection';
import { getCurrentAccountCommunities } from '../../services/accountService';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';

function NavDropdownMenu({ currentAccount, logOut }) {
  // Current account communities
  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    getCurrentAccountCommunities().then(data => {
      setCommunities(data.data);
    });
  }, []);
  
  if (!currentAccount) return null;

  return (
    <div className="fixed top-[50px] right-[20px] max-h-[80%] w-[252px] bg-canvas-light rounded-[4px] border-[1px] border-nav-border py-[8px] overflow-y-auto overflow-x-hidden z-[80]">
      {/* Profile Info */}
      <NavDropdownSection>
        <NavDropdownHeader>
            <span className="h-[20px] w-[20px] mr-[12px] flex-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>account-circle-outline</title>
                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
              </svg>
            </span>
            <span className="flex-1 text-[14px] leading-[18px] font-semibold overflow-hidden text-ellipsis text-left w-full">
              My Stuff
            </span>
        </NavDropdownHeader>
        <NavDropdownItem to={`/profile/${currentAccount.username}`}>
          Profile
        </NavDropdownItem>
        <NavDropdownItem to="profile/settings">
          Settings
        </NavDropdownItem>
      </NavDropdownSection>
      
      {/* Feed/Community Info */}
      <NavDropdownSection>
        <NavDropdownHeader>
            <span className="h-[20px] w-[20px] mr-[12px] flex-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>trending-up</title>
                <path fill="currentColor" d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
              </svg>
            </span>
            <span className="flex-1 text-[14px] leading-[18px] font-semibold overflow-hidden text-ellipsis text-left w-full">
              My Feeds
            </span>
        </NavDropdownHeader>
        <NavDropdownItem to="/">
          Home
        </NavDropdownItem>
        <NavDropdownItem to="/?filter=all">
          View All
        </NavDropdownItem>
      </NavDropdownSection>

      {/* Feed/Community Info */}
      <NavDropdownSection>
        <NavDropdownHeader>
            <span className="h-[20px] w-[20px] mr-[12px] flex-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>account-group-outline</title>
                <path fill="currentColor" d="M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z" />
              </svg>
            </span>
            <span className="flex-1 text-[14px] leading-[18px] font-semibold overflow-hidden text-ellipsis text-left w-full">
              My Communities
            </span>
        </NavDropdownHeader>
        {communities.map((community) => (
          <NavDropdownItem to={`/c/${community.sub_dir}`} key={community.id} withIcon>
            <span className="h-[20px] w-[20px] mr-[12px] flex-none">
              <img src={community.avatar || defaultAvatar} alt="community avatar" className="rounded-full h-[20px] w-[20px]" />
            </span>
            <span className="flex-1 text-[14px] leading-[18px] font-semibold overflow-hidden text-ellipsis text-left w-full">
              {`c/${community.sub_dir}`}
            </span>
          </NavDropdownItem>
        ))}
      </NavDropdownSection>

      {/* Logout */}
      <NavDropdownItem as="button" withIcon onClick={logOut}>
        <svg className="w-[20px] h-[20px] mr-[12px] flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>logout-variant</title>
          <path d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z" />
        </svg>
        <span className="flex-1 text-[14px] font-semibold text-ellipsis overflow-hidden text-left w-full">
          Log Out
        </span>
      </NavDropdownItem>
    </div>
  );
}

export default NavDropdownMenu;
