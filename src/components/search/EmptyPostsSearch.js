import React from 'react';
import EmptyFeed from '../EmptyFeed'

function EmptyPostsSearch({ searchTerm }) {
  return (
    <EmptyFeed>
      <div className="m-[16px] text-[18px] font-medium leading-[22px]">
        {`Hmmm... We couldn't find any results for ${searchTerm}`}
      </div>
      <div className="text-[14px] leading-[18px] text-meta-text">
        Double-check your spelling or try different keywords
      </div>
    </EmptyFeed>
  );
}

export default EmptyPostsSearch;
