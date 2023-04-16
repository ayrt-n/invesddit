import React, { useState } from 'react';
import RecentPost from './RecentPost';
import { getRecentPosts, clearRecentPosts } from '../services/recentPostTracker';

function RecentPostsWidget() {
  const [recentPosts, setRecentPosts] = useState(getRecentPosts());

  const handleClick = () => {
    clearRecentPosts();
    setRecentPosts([]);
  }

  if (!recentPosts || recentPosts.length < 1) return null;

  return (
    <div className="mt-[16px] p-[12px] bg-canvas-light border-post-border border-[1px] rounded-[4px] break-words">
      <div className="text-[12px] font-bold leading-[12px] pb-[4px]">
        Recent Posts
      </div>
      <div>
        {recentPosts.map((post) => (<RecentPost post={post} key={post.id} />))}
      </div>
      <button className="text-[12px] leading-[16px] text-feed-text w-full text-right" onClick={handleClick}>
        Clear
      </button>
    </div>
  );
}

export default RecentPostsWidget;
