import React, { useState } from 'react';
import logo from '../../assets/icons/invesddit-logo.svg';
import PillButton from '../PillButton';
import { joinCommunity, leaveCommunity } from '../../services/communityService';

function CommunityHeader({ title, id, role, setRole }) {
  const [leaveText, setLeaveText] = useState('Joined');

  const requestJoinCommunity = () => {
    joinCommunity(id).then(() => {
      setRole('member');
    })
    .catch(err => console.error(err));
  };

  const requestLeaveCommunity = () => {
    leaveCommunity(id).then(() => {
      setRole(null);
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="w-full bg-canvas-light">
      <div className="max-w-[984px] px-[16px] mx-auto flex">
        <div className="mb-[12px] mt-[-14px] flex">
          <img src={logo} alt={`community logo for ${id}`} className="h-[72px] w-[72px] rounded-full border-[4px] border-canvas-light" />
          <div className="mt-[24px] pl-[16px] inline-flex items-start flex-1 justify-between w-full">
            <div className="inline-block pr-[24px]">
              <h1 className="text-[28px] font-bold leading-[32px] pr-[2px] pb-[4px]">
                {title}
              </h1>
              <h2 className="text-[14px] font-medium leading-[18px] text-meta-text">
                {`c/${id}`}
              </h2>
            </div>
            <div className="mr-[26px]">
              {role ?
                <PillButton
                  variant="inverted"
                  additionalClasses="w-[96px]"
                  onClick={requestLeaveCommunity}
                  onMouseOver={() => setLeaveText('Leave')}
                  onMouseLeave={() => setLeaveText('Joined')}
                >
                  {leaveText}
                </PillButton> :
                <PillButton additionalClasses="w-[96px]" onClick={requestJoinCommunity}>
                  Join
                </PillButton>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHeader;
