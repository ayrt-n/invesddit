import React, { useState, useEffect } from 'react'
import FeedController from '../FeedController'
import PostPreview from '../post/PostPreview'
import { getPostFeed } from '../../services/feedService'

function CommunityFeed({ community }) {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    getPostFeed(`community=${community}`).then(data => setPosts(data));
  }, [community]);

  if (!posts) return null;

  return (
    <>
      <FeedController />
      {posts.map((post) => (<PostPreview post={post} key={post.id} />))}
    </>
  );
}

export default CommunityFeed;
