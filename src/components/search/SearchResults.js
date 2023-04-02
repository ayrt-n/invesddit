import React from 'react';
import { useSearchParams } from 'react-router-dom';
import AccountsSearchResults from './AccountsSearchResults';
import CommunitiesSearchResults from './CommunitiesSearchResults';
import PostSearchResults from './PostSearchResults';
import SearchController from './SearchController';

function SearchResults() {
  const [searchParams] = useSearchParams();

  // Get searchFor value based on searchParams OR default to posts
  const type = searchParams.get('type') || 'posts';

  return (
    <div className="py-[20px] md:px-[24px]">
      <div className="mx-auto max-w-min">
        {/* Search Controller for switching between search type */}
        <SearchController />

        {/* Render results based on type of search */}
        <div className="flex">
          {type === 'posts' ?
            <PostSearchResults /> :
          type === 'communities' ?
            <CommunitiesSearchResults /> :
            <AccountsSearchResults />
          }
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
