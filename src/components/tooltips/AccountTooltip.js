import React from 'react';
import PillButton from '../PillButton';
import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { UserAvatar } from '../Avatar';
import TooltipWrapper from './TooltipWrapper';

function AccountTooltip({ account }) {
  const createdAtDate = Date.parse(account.created_at);

  return (
    <TooltipWrapper>
      <div className="p-[12px]">
        <div className="w-full flex mb-[12px]">
          <UserAvatar src={account.avatar} classNames="h-[32px] w-[32px] mr-[8px] shrink-0" alt={`avatar for ${account.username}`} />
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
    </TooltipWrapper>
  );
}

export default AccountTooltip;
