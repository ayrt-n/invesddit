import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FeedController from '../FeedController';
import PostPreview from '../post/PostPreview';
import BackToTopWidget from '../BackToTopWidget';
import { usePostFeed } from '../../hooks/usePostFeed';
import { getAccount } from '../../services/accountService';
import ProfileWidget from './ProfileWidget';

function Profile() {
  let { username } = useParams();
  const [account, setAccount] = useState(null);
  const [posts, setPosts] = usePostFeed(`api/v1/accounts/${username}/posts`);

  useEffect(() => {
    getAccount(username).then(data => {
      setAccount(data.data);
    })
  }, [username])

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
          <FeedController />

          {posts.map((post) => (
              <PostPreview post={post} key={post.id} updatePostVoteStatus={updatePostVoteStatus} />
          ))}
        </div>

        {/* Feed Sidebar */}
        <div className="w-[312px] ml-[24px] hidden md:block">
          <ProfileWidget account={account} />
          <BackToTopWidget />
        </div>
      </div>
    </div>
  )
}

export default Profile;
