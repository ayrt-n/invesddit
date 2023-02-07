import React, { useState, useEffect } from 'react';
import FeedSidebarWelcome from './FeedSidebarWelcome';
import FeedController from './FeedController';
import { getPostFeed } from '../services/feedService';
import FeedSidebarFooter from './FeedSidebarFooter';
import BackToTopWidget from './BackToTopWidget';
import PostPreview from './post/PostPreview';

function Homepage() {
  const [posts, setPosts] = useState([])
  const [sortBy, setSortBy] = useState('hot')

  useEffect(() => {
    let searchParams = { sort_by: sortBy }

    getPostFeed(searchParams).then(data => setPosts(data.data));
  }, [sortBy])

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        {/* Main Post Feed */}
        <div className="w-[640px]">
          <FeedController sortBy={sortBy} handleClick={setSortBy} />

          {posts.map((post) => (
              <PostPreview post={post} key={post.id} />
          ))}
        </div>

        {/* Feed Sidebar */}
        <div className="w-[312px] ml-[24px] hidden md:block">
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
