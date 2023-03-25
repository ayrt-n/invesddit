import React, { useState } from 'react';
import WelcomeWidget from './WelcomeWidget';
import GithubWidget from './GithubWidget';
import BackToTopWidget from './BackToTopWidget';
import RecentPostsWidget from './RecentPostsWidget';
import { getRecentPosts } from '../services/recentPostTracker';
import Feed from './Feed';
import EmptyHomeFeed from './EmptyHomeFeed';
import CreatePostWidget from './CreatePostWidget';
import FeedController from './FeedController';
import { isLoggedIn } from '../services/authService';

function Homepage() {
  const [recentPosts, setRecentPosts] = useState(getRecentPosts());

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        {/* Main Post Feed */}
        <div className="w-[640px]">
          {isLoggedIn() ? <CreatePostWidget /> : null }
          <FeedController />

          <Feed
            subdir="/api/v1/posts"
            emptyFeed={<EmptyHomeFeed />}
          />
        </div>

        {/* Feed Sidebar */}
        <div className="w-[312px] ml-[24px] hidden md:block">
          <WelcomeWidget />
          <RecentPostsWidget
            recentPosts={recentPosts}
            clear={() => setRecentPosts([])}
          />
          <div className="sticky top-[57px]">
            <GithubWidget />
          </div>
          <div className="sticky top-[calc(100vh-8px)] translate-y-[-100%]">
            <BackToTopWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
