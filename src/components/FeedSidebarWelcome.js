import React from 'react';

function FeedSidebarWelcome() {
  return (
    <div className="bg-canvas-light p-[12px] rounded-[4px]">
      <div className="text-[16px] font-semibold leading-[20px] mb-[8px]">
        Home
      </div>
      <div className="mb-[8px] text-[14px] leading-[21px] break-words">
        Your personal Invesddit frontpage. Come here to check in with your favorite communities
      </div>
      <hr className="h-[1px] my-[16px]" />
      <div>
        <a className="rounded-full bg-button text-canvas-light font-bold min-h-[32px]">
          Create Post
        </a>
      </div>
      <div>
        <button>
          Create Community
        </button>
      </div>
    </div>
  );
}

export default FeedSidebarWelcome;
