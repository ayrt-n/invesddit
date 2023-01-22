import React from 'react';
import FeedSidebarWelcome from './FeedSidebarWelcome';
import Post from './post/Post';

function MainFeed() {
  const posts = [
    {
      score: 23,
      account: 'artn',
      community: 'SHOP',
      title: 'Thoughts on DTC slowdown?',
      body: 'Have been doing a lot of thinking...',
      created_at: Date.now(),
      id: 1
    },
    {
      score: 23,
      account: 'artn',
      community: 'SHOP',
      title: 'Thoughts on DTC slowdown?',
      body: 'Have been doing a lot of thinking...',
      created_at: Date.now(),
      id: 1
    }
  ];

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        {/* Main Post Feed */}
        <div className="w-[640px]">
          {posts.map((post) => (
              <Post post={post} />
          ))}
        </div>

        {/* Feed Sidebar */}
        <div className="w-[312px] ml-[24px]">
          <FeedSidebarWelcome />
        </div>
      </div>
    </div>
  );
}

export default MainFeed;
