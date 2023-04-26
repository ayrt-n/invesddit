import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'react-router-dom';
import { CommunityAvatar } from '../Avatar';
import HoverableTooltip from '../tooltips/HoverableTooltip';
import CommunityTooltip from '../tooltips/CommunityTooltip';
import AccountTooltip from '../tooltips/AccountTooltip';

function PostMetaText({ community, account, createdAt }) {
  const createdAtDate = Date.parse(createdAt);

  return (
    <div className="py-[8px] grow" data-testid="metaText">
      <div className="text-[12px] leading-[16px] mx-[8px] mb-[8px] flex items-center">
        {community &&
          <>
            <div>
              <Link to={`/c/${community.sub_dir}`}>
                <CommunityAvatar src={community.avatar} classNames="h-[20px] w-[20px] mr-[4px] bg-canvas-light" alt={`avatar for c/${community.sub_dir}`} />
              </Link>
            </div>
            <HoverableTooltip tooltipComponent={<CommunityTooltip community={community} />}>
              <Link to={`/c/${community.sub_dir}`}>
                <span className="font-bold hover:underline">
                  {`c/${community.sub_dir}`}
                </span>
              </Link>
            </HoverableTooltip>
            <span className="mx-[4px] text-meta-text">
            •
            </span>
          </>
        }
        <span className="mr-[3px] text-meta-text">
          Posted by
        </span>
        <HoverableTooltip tooltipComponent={<AccountTooltip account={account} />}>
          <Link to={`/profile/${account.username}`}>
            <span className="mr-[3px] text-meta-text hover:underline">
              {`u/${account.username}`}
            </span>
          </Link>
        </HoverableTooltip>
        <span className="mr-[3px] text-meta-text">
          {formatDistanceToNow(createdAtDate)} ago
        </span>
      </div>
    </div>
  );
}

export default PostMetaText;
