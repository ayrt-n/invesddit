import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import AccountTooltip from '../tooltips/AccountTooltip';
import { Link } from 'react-router-dom';
import HoverableTooltip from '../tooltips/HoverableTooltip';

function CommentMetaText({ account, createdAt, status }) {
  const createdAtDate = Date.parse(createdAt);

  // If status is deleted, render mock up of Comment Meta Text
  if (status === 'deleted') {
    return (
      <div className="mt-[10px] mb-[6px] min-h-[18px]">
        <div className="text-[12px] leading-[16px] flex">
          <div>
            <div>
              <span className="font-medium">
                [deleted]
              </span>
            </div>
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

  return (
    <div className="mt-[10px] mb-[6px] min-h-[18px]">
      <div className="text-[12px] leading-[16px] flex">
        <HoverableTooltip tooltipComponent={<AccountTooltip account={account} />}>
          <Link to={`/profile/${account.username}`}>
            <span className="font-medium hover:underline">
              {`${account.username}`}
            </span>
          </Link>
        </HoverableTooltip>
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
