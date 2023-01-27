import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import CommunityTooltip from './communityTooltip';
import AccountTooltip from './accountTooltip';
import { Link } from 'react-router-dom';

function PostMetaText({ community, account, createdAt }) {
  const createdAtDate = Date.parse(createdAt);

  // States to determine whether pop-up menus should be open/closed
  const [communityMenuOpen, setCommunityMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const [delayHandler, setDelayHandler] = useState(null)

  // Event handler for showing tooltip on hover with a 500ms delay
  const handleMouseEnter = (callback) => {
    // Avoid resetting delay handler if already set
    // Helps to fix bugs as mouse moves around the tooltip
    if (delayHandler) { return }

    setDelayHandler(setTimeout(() => {
      callback(true)
    }, 500));
  };

  // Event handler for removing the tooltip after hovering
  // If tooltip has not been set (as a result of delay) clear the timeout
  const handleMouseLeave = (callback) => {
    clearTimeout(delayHandler);
    setDelayHandler(null);
    callback(false);
  }

  return (
    <div className="py-[8px] grow">
      <div className="text-[12px] leading-[16px] mx-[8px] mb-[8px] flex">
        {community &&
          <>
            <div className="relative" onMouseOver={() => handleMouseEnter(setCommunityMenuOpen)} onMouseLeave={() => handleMouseLeave(setCommunityMenuOpen)}>
              <Link to={`c/${community.sub_dir}`}>
                <span className="font-bold hover:underline">
                  {`c/${community.sub_dir}`}
                </span>
              </Link>
              { communityMenuOpen &&
                <CommunityTooltip community={community} />
              }
            </div>
            <span className="mx-[4px] text-meta-text">
            •
            </span>
          </>
        }
        <span className="mr-[3px] text-meta-text">
          Posted by
        </span>
        <div className="relative" onMouseOver={() => handleMouseEnter(setAccountMenuOpen)} onMouseLeave={() => handleMouseLeave(setAccountMenuOpen)}>
          <span className="mr-[3px] text-meta-text hover:underline">
            {`u/${account.username}`}
          </span>
          { accountMenuOpen &&
            <AccountTooltip account={account} />
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
