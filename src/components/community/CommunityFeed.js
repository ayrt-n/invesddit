import React from 'react'
import { useParams } from 'react-router-dom'
import FeedController from '../FeedController'
import EmptyCommunityFeed from './EmptyCommunityFeed'
import Feed from '../Feed'

function CommunityFeed() {
  let { community_id } = useParams();
  
  return (
    <>
      <FeedController />
      <Feed
        subdir={`/api/v1/communities/${community_id}/posts`}
        emptyFeed={<EmptyCommunityFeed />}
      />
    </>
  );
}

export default CommunityFeed;
