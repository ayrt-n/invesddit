import React, { useState } from 'react';
import FeedSidebarWelcome from './FeedSidebarWelcome';
import FeedController from './FeedController';
import FeedSidebarFooter from './FeedSidebarFooter';
import BackToTopWidget from './BackToTopWidget';
import PostPreview from './post/PostPreview';
import CreatePostWidget from './CreatePostWidget';
import RecentPostsWidget from './RecentPostsWidget';
import { getRecentPosts } from '../services/recentPostTracker';
import { usePostFeed } from '../hooks/usePostFeed';
import { isLoggedIn } from '../services/authService';

function Homepage() {
  const [posts, setPosts] = usePostFeed('/api/v1/posts');
  const [recentPosts, setRecentPosts] = useState(getRecentPosts());

  const updatePostVoteStatus = (id, status, changeInScore) => {
    setPosts((prev) => (
      prev.map((post) => {
        if (post.id === id) {
          const updatedScore = parseInt(post.score) + changeInScore;
          return { ...post, vote_status: status, score: updatedScore };
        } else {
          return post;
        }
      })
    ));
  };

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        {/* Main Post Feed */}
        <div className="w-[640px]">
          {isLoggedIn() ? <CreatePostWidget /> : null }
          <FeedController />

          {posts.map((post) => (
              <PostPreview post={post} key={post.id} updatePostVoteStatus={updatePostVoteStatus} />
          ))}
        </div>

        {/* Feed Sidebar */}
        <div className="w-[312px] ml-[24px] hidden md:block">
          <FeedSidebarWelcome />
          <RecentPostsWidget
            recentPosts={recentPosts}
            clear={() => setRecentPosts([])}
          />
          <div className="sticky top-[57px]">
            <FeedSidebarFooter />
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
