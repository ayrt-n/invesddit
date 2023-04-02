import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchFeed from './SearchFeed';
import { searchCommunities } from '../../services/communityService';
import SearchFeedLoading from './SearchFeedLoading';
import EmptySearch from './EmptySearch';
import SearchFeedItem from './SearchFeedItem';


function CommunitiesSearchResults() {
  const [searchParams] = useSearchParams();
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = { q: searchParams.get('q') };
    setLoading(true);

    searchCommunities(params).then(data => {
      setCommunities(data.data);
      setLoading(false);
    })
  }, [searchParams]);

  // Return skeleton loader while loading
  if (loading) return (
    <div className="w-[976px]">
      <SearchFeedLoading />
    </div>
  );

  // Otherwise return search feed with account results
  return (
    <div className='w-[976px]'>
        {communities.length > 0 ?
          <SearchFeed>
            {communities.map(community => (
              <SearchFeedItem
                key={community.id}
                title={`c/${community.sub_dir}`}
                link={`/c/${community.sub_dir}`}
                subtitle={`${community.memberships_count} Members`}
                avatar={community.avatar}
              />))}
          </SearchFeed> :
          <EmptySearch searchTerm={searchParams.get('q')} />
        }
    </div>
  );
}

export default CommunitiesSearchResults;
