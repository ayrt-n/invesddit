import React from 'react';
import ContentCard from './ContentCard';
import PillButton from './PillButton';
import ProtectedLink from './ProtectedLink';

function FeedSidebarWelcome() {
  return (
    <ContentCard>
      <div className="bg-stock-banner h-[34px] bg-cover bg-position-center bg-no-repeat" />
      <div className="p-[12px]">
        <div className="text-[16px] font-semibold leading-[20px] mb-[8px]">
          Home
        </div>
        <div className="mb-[8px] text-[14px] leading-[21px] break-words">
          Your personal Invesddit frontpage. Come here to check in with your favorite communities
        </div>
        <hr className="h-[1px] my-[16px]" />
        <div>
          <PillButton as={ProtectedLink} callToAction="You can create posts and share ideas with an Invesddit account." to="/submit" variant="primary">
            Create Post
          </PillButton>
        </div>
        <div className="mt-[12px]">
          <PillButton as={ProtectedLink} callToAction="You can create communities with an Invesddit account." to="/communities/new" variant="inverted">
            Create Community
          </PillButton>
        </div>
      </div>
    </ContentCard>
  );
}

export default FeedSidebarWelcome;
