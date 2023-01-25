import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import CommunityTooltip from './communityTooltip';
import AccountTooltip from './accountTooltip';

function PostMetaText({ community, account, createdAt }) {
  const createdAtDate = Date.parse(createdAt);

  // States to determine whether pop-up menus should be open/closed
  const [communityMenuOpen, setCommunityMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  return (
    <div className="py-[8px] grow">
      <div className="text-[12px] leading-[16px] mx-[8px] mb-[8px] flex">
        <div className="relative" onMouseOver={() => setCommunityMenuOpen(true)} onMouseLeave={() => setCommunityMenuOpen(false)}>
          <span className="font-bold hover:underline">
            {`c/${community.sub_dir}`}
          </span>
          { communityMenuOpen &&
            <CommunityTooltip community={community} />
          }
        </div>
        <span className="mx-[4px] text-meta-text">
        •
        </span>
        <span className="mr-[3px] text-meta-text">
          Posted by
        </span>
        <div className="relative" onMouseOver={() => setAccountMenuOpen(true)} onMouseLeave={() => setAccountMenuOpen(false)}>
          <span className="mr-[3px] text-meta-text hover:underline">
            {`u/${account.username}`}
          </span>
          { accountMenuOpen &&
            <AccountTooltip community={community} />
          }
        </div>
        <span className="mr-[3px] text-meta-text">
          {formatDistanceToNow(createdAtDate)} ago
        </span>
      </div>
    </div>
  );
}

export default PostMetaText;
