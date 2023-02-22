import React, { useState, useEffect } from 'react'
import FeedController from '../FeedController'
import PostPreview from '../post/PostPreview'
import { getPostFeed } from '../../services/feedService'
import { useParams } from 'react-router-dom'

function CommunityFeed() {
  let { community_id } = useParams();
  const [posts, setPosts] = useState(null);
  const [sortBy, setSortBy] = useState('hot');

  useEffect(() => {
    let feedParams = {
      sort_by: sortBy,
      community: community_id,
    }

    getPostFeed(feedParams).then(data => setPosts(data.data));
  }, [sortBy, community_id]);

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
