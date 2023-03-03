import React, { useState } from 'react'
import FeedController from '../FeedController'
import PostPreview from '../post/PostPreview'
import { useParams } from 'react-router-dom'
import { usePostFeed } from '../../hooks/usePostFeed'

function CommunityFeed() {
  let { community_id } = useParams();
  const [posts, setPosts] = usePostFeed(`/api/v1/communities/${community_id}/posts`);
  const [sortBy, setSortBy] = useState('hot');

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

  if (!posts) return null;

  return (
    <>
      <FeedController sortBy={sortBy} handleClick={setSortBy} />
      {posts.map((post) => (<PostPreview post={post} communityView key={post.id} updatePostVoteStatus={updatePostVoteStatus} />))}
    </>
  );
}

export default CommunityFeed;
