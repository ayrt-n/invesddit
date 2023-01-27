import React, { useState, useEffect } from 'react';
import FeedSidebarWelcome from './FeedSidebarWelcome';
import Post from './post/Post';
import FeedController from './FeedController';
import { getPostFeed } from '../services/feedService';
import FeedSidebarFooter from './FeedSidebarFooter';
import BackToTopWidget from './BackToTopWidget';

function Homepage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPostFeed().then(data => setPosts(data));
  }, [])

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        {/* Main Post Feed */}
        <div className="w-[640px]">
          <FeedController />

          {posts.map((post) => (
              <Post post={post} key={post.id} />
          ))}
        </div>

        {/* Feed Sidebar */}
        <div className="w-[312px] ml-[24px]">
          <FeedSidebarWelcome />
          <div className="sticky top-[68px]">
            <FeedSidebarFooter />
            <BackToTopWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
