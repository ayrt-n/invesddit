import React, { useState } from 'react';
import defaultCommunityAvatar from '../../assets/icons/invesddit-logo.svg';
import PillButton from '../PillButton';
import ProtectedButton from '../ProtectedButton';
import { joinCommunity, leaveCommunity } from '../../services/communityService';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';

function CommunityHeader({ title, id, role, setRole, avatar, banner }) {
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

  // Call to action if unauthorized user tries to join community
  const callToAction = 'You can join communities with an Invesddit account.';

  return (
    <>
      <Link to={`/c/${id}`}>
        <div className="h-[128px] bg-blue-300 bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${banner})`}} />
      </Link>
      <div className="w-full bg-canvas-light">
        <div className="max-w-[984px] px-[16px] mx-auto flex">
          <div className="mb-[12px] mt-[-14px] flex">
            <Avatar src={avatar || defaultCommunityAvatar} alt={`community logo for ${id}`} classNames="h-[72px] w-[72px] border-[4px] border-canvas-light bg-canvas-light" />
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
                  <PillButton as={ProtectedButton} callToAction={callToAction} additionalClasses="w-[96px]" onClick={requestJoinCommunity}>
                    Join
                  </PillButton>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityHeader;
