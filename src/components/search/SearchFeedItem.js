import React from 'react';
import { Link } from 'react-router-dom';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';
import Avatar from '../Avatar';
import PillButton from '../PillButton';

function SearchFeedItem({ title, subtitle, avatar, link }) {
  return (
    <div className="-mt-[1px] p-[16px] border-[1px] border-post-border hover:border-post-border-hover hover:z-10 cursor-pointer first:rounded-t-[4px] last:rounded-b-[4px] relative">
      <Link to={link}>
        <div className="flex items-center justify-between">
          <Avatar className="h-[36px] w-[36px] shrink-0" src={avatar || defaultAvatar} alt="user uploaded avatar" />
          <div className="grow px-[8px] overflow-hidden break-words">
            <div className="flex flex-col items-baseline">
              <h6 className="w-full nowrap overflow-hidden text-ellipsis text-[12px] leading-[16px] font-bold hover:underline">
                {title}
              </h6>
              <p className="text-[12px] leading-[16px] text-meta-text">
                {subtitle}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[88px]">
            <PillButton variant="inverted">
              View
            </PillButton>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchFeedItem;
