import React, { useState, useEffect, useContext } from 'react';
import FeedSidebarWelcome from './FeedSidebarWelcome';
import FeedController from './FeedController';
import { getPostFeed } from '../services/feedService';
import FeedSidebarFooter from './FeedSidebarFooter';
import BackToTopWidget from './BackToTopWidget';
import PostPreview from './post/PostPreview';
import AuthContext from '../contexts/authentication/AuthContext';
import CreatePostWidget from './CreatePostWidget';
import RecentPostsWidget from './RecentPostsWidget';
import { getRecentPosts } from '../services/recentPostTracker';

function Homepage() {
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState('hot');
  const [recentPosts, setRecentPosts] = useState(getRecentPosts());
  const { loggedIn } = useContext(AuthContext);


  useEffect(() => {
    let searchParams = { sort_by: sortBy }

    getPostFeed(searchParams).then(data => {
      setPosts(data.data);
    });
  }, [sortBy]);

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
          {loggedIn ? <CreatePostWidget /> : null }
          <FeedController sortBy={sortBy} handleClick={setSortBy} />

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
