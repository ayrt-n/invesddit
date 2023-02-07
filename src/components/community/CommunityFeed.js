import React, { useState, useEffect } from 'react'
import FeedController from '../FeedController'
import PostPreview from '../post/PostPreview'
import { getPostFeed } from '../../services/feedService'
import { useParams } from 'react-router-dom'

function CommunityFeed() {
  let { community_id } = useParams();
  const [posts, setPosts] = useState(null);
  const [sortBy, setSortBy] = useState('hot')

  useEffect(() => {
    let searchParams = { sort_by: sortBy }

    getPostFeed(searchParams).then(data => setPosts(data.data));
  }, [sortBy, community_id]);

  if (!posts) return null;

  return (
    <>
      <FeedController sortBy={sortBy} handleClick={setSortBy} />
      {posts.map((post) => (<PostPreview post={post} communityView key={post.id} />))}
    </>
  );
}

export default CommunityFeed;
