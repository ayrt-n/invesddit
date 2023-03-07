import React, { useState } from 'react'
import FeedController from '../FeedController'
import PostPreview from '../post/PostPreview'
import { useParams } from 'react-router-dom'
import { usePostFeed } from '../../hooks/usePostFeed'
import EmptyCommunityFeed from './EmptyCommunityFeed'
import PostLoading from '../post/PostLoading'

function CommunityFeed() {
  let { community_id } = useParams();
  const {posts, setPosts, isLoading} = usePostFeed(`/api/v1/communities/${community_id}/posts`);
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

  return (
    <>
      <FeedController sortBy={sortBy} handleClick={setSortBy} />
      {isLoading ?
        <>
          <PostLoading />
          <PostLoading />
          <PostLoading />
        </> :
        posts.length > 0 ?
        posts.map((post) => (<PostPreview post={post} communityView key={post.id} updatePostVoteStatus={updatePostVoteStatus} />)) :
        <EmptyCommunityFeed />
      }
    </>
  );
}

export default CommunityFeed;
