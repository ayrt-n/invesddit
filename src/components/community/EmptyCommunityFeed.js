import React from 'react';
import EmptyFeed from '../feed/EmptyFeed'
import PillButton from '../PillButton'
import { Link } from 'react-router-dom'

function EmptyCommunityFeed() {
  return (
    <EmptyFeed>
      <div className="m-[16px] text-[18px] font-medium leading-[22px]">
        There are no posts in this community.
      </div>
      <div className="text-[14px] leading-[18px] m-[16px] font-medium">
        Start the conversation!
      </div>
      <PillButton as={Link} to="/submit" className="w-[200px] mx-auto">
        Add a post
      </PillButton>
    </EmptyFeed>
  );
}

export default EmptyCommunityFeed;
