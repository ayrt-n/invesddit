import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchResults } from '../../services/searchService';
import AccountsWidget from './AccountsWidget';
import CommunitiesWidget from './CommunitiesWidget';
import PostsWidget from './PostsWidget';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = searchParams.get('q');
    setLoading(true);

    getSearchResults(q).then(data => {
      setResults(data.data);
      setLoading(false);
    });
  }, [searchParams]);

  return (
    <div className="max-w-[1024px] mx-auto">
      <div className="p-[24px] flex flex-col grow">
        <div className='w-full max-w-[100%] flex'>
          {/* Post Results */}
          <div className="max-w-[640px] w-full flex-[1_1_640px] mb-[16px]">
            <PostsWidget posts={results.posts} loading={loading} searchTerm={searchParams.get('q')} />
          </div>

          {/* Community and Account Results */}
          <div className="flex-[0_0_312px] ml-[24px] max-w-[312px]">
            <div className="flex flex-col h-full">
              <CommunitiesWidget communities={results.communities} loading={loading} />
              <AccountsWidget accounts={results.accounts} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
