import React, { useState, useEffect } from 'react'
import FeedController from '../FeedController'
import PostPreview from '../post/PostPreview'
import { getPostFeed } from '../../services/feedService'
import { useParams } from 'react-router-dom'

function CommunityFeed() {
  let { community_id } = useParams();

  const [posts, setPosts] = useState(null)
  useEffect(() => {
    getPostFeed(`community=${community_id}`).then(data => {
      setPosts(data.data);
    });
  }, [community_id]);

  if (!posts) return null;

  return (
    <>
      <FeedController />
      {posts.map((post) => (<PostPreview post={post} communityView key={post.id} />))}
    </>
  );
}

export default CommunityFeed;
