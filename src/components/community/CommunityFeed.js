import React, { useState, useEffect } from 'react'
import FeedController from '../FeedController'
import PostPreview from '../post/PostPreview'
import { getPostFeed } from '../../services/feedService'
import { useParams } from 'react-router-dom'

function CommunityFeed() {
  let { id } = useParams();

  const [posts, setPosts] = useState(null)
  useEffect(() => {
    getPostFeed(`community=${id}`).then(data => {
      // Remove community details as not needed
      // THIS SHOULD BE OPTIMIZED BY API NOT RENDERING THIS WHEN RETURNING COMMUNITY FEED
      data.forEach((post) => delete post['community'])
      setPosts(data);
    });
  }, [id]);

  if (!posts) return null;

  return (
    <>
      <FeedController />
      {posts.map((post) => (<PostPreview post={post} key={post.id} />))}
    </>
  );
}

export default CommunityFeed;
