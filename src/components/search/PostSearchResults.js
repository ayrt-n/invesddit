import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CommunitiesWidget from './CommunitiesWidget';
import AccountsWidget from './AccountsWidget';
import { searchPosts } from '../../services/postService';
import { searchCommunities } from '../../services/communityService';
import { searchAccounts } from '../../services/accountService';
import SearchFeedLoading from './SearchFeedLoading';
import SearchFeed from './SearchFeed';
import PostResult from './PostResult';
import EmptySearch from './EmptySearch';

function PostSearchResults() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = { q: searchParams.get('q') };
    setLoading(true);

    Promise.all([
      searchPosts(params).then(data => {
        setResults(results => ({...results, posts: data.data }));
      }),
      searchCommunities({...params, limit: 5}).then(data => {
        setResults(results => ({...results, communities: data.data }));
      }),
      searchAccounts({...params, limit: 5}).then(data => {
        setResults(results => ({...results, accounts: data.data }));
      }),
    ])
    .then(() => setLoading(false));

  }, [searchParams]);

  return (
    <>
      {/* Post Results */}
      <div className="w-[640px]">
        {loading ?
          <SearchFeedLoading postFeed /> :
        results.posts.length > 0 ?
          <SearchFeed>
            {results.posts.map(post => (
              <PostResult post={post} key={post.id} searchTerm={searchParams.get('q')} />
            ))}
          </SearchFeed> :
          <EmptySearch searchTerm={searchParams.get('q')} />
        }
      </div>
      {/* Community and Account Results */}
      <div className="w-[312px] min-w-[280px] ml-[24px] hidden md:block">
        <div className="flex flex-col h-full">
          <CommunitiesWidget communities={results.communities} loading={loading} />
          <AccountsWidget accounts={results.accounts} loading={loading} />
        </div>
      </div>
    </>
  );
}

export default PostSearchResults;
