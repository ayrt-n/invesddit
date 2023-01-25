import React from 'react';
import PillButton from './PillButton';
import { Link } from 'react-router-dom';

function FeedSidebarWelcome() {
  return (
    <div className="bg-canvas-light p-[12px] rounded-[4px] border-[1px] border-post-border">
      <div className="text-[16px] font-semibold leading-[20px] mb-[8px]">
        Home
      </div>
      <div className="mb-[8px] text-[14px] leading-[21px] break-words">
        Your personal Invesddit frontpage. Come here to check in with your favorite communities
      </div>
      <hr className="h-[1px] my-[16px]" />
      <div>
        <PillButton as={Link} to="/submit" variant="primary">
          Create Post
        </PillButton>
      </div>
      <div className="mt-[12px]">
        <PillButton as={Link} to="/communities/new" variant="inverted">
          Create Community
        </PillButton>
      </div>
    </div>
  );
}

export default FeedSidebarWelcome;
