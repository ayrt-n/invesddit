import React from 'react';
import PillButton from '../PillButton';
import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';
import Avatar from '../Avatar';

function AccountTooltip({ account }) {
  const createdAtDate = Date.parse(account.created_at);

  return (
    <div onClick={(e) => e.stopPropagation()} className="absolute top-full bg-canvas-light rounded-[4px] shadow-[0_1px_3px_0px_rgba(0,0,0,0.2)] max-w-[380px] min-w-[240px] z-50 cursor-auto">
        <div className="p-[12px]">
          <div className="w-full flex mb-[12px]">
            <Avatar src={account.avatar || defaultAvatar} classNames="h-[32px] w-[32px] mr-[8px] shrink-0" alt={`avatar for ${account.username}`} />
            <div>
              <Link className="text-[16px] font-medium leading-[20px] mr-[4px] inline-block" to={`/profile/${account.username}`}>
                {`u/${account.username}`}
              </Link>
              <div className="text-[12px] leading-[16px] text-meta-text">
                <div className="inline-block">
                  {`u/${account.username}`}
                  <div className="mx-[3px] inline-block">
                    •
                  </div>
                </div>
                <div className="inline-block">
                  {formatDistanceToNow(createdAtDate)} ago
                </div>
              </div>
            </div>
          </div>
          <PillButton as={Link} to={`/profile/${account.username}`}>
            View Profile
          </PillButton>
        </div>
      </div>
  );
}

export default AccountTooltip;
