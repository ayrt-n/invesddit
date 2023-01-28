import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import AccountTooltip from '../post/accountTooltip';
import { Link } from 'react-router-dom';

function CommentMetaText({ account, createdAt }) {
  const createdAtDate = Date.parse(createdAt);

  // States to determine whether pop-up menus should be open/closed
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
    <div className="mt-[10px] mb-[6px] min-h-[18px]">
      <div className="text-[12px] leading-[16px] flex">
        <div className="relative" onMouseOver={() => handleMouseEnter(setAccountMenuOpen)} onMouseLeave={() => handleMouseLeave(setAccountMenuOpen)}>
          <span className="mr-[3px] font-medium hover:underline">
            {`${account.username}`}
          </span>
          { accountMenuOpen &&
            <AccountTooltip account={account} />
          }
        </div>
        <span className="mx-[4px] text-meta-text">
          •
        </span>
        <span className="mr-[3px] text-meta-text">
          {formatDistanceToNow(createdAtDate)} ago
        </span>
      </div>
    </div>
  );
}

export default CommentMetaText;
