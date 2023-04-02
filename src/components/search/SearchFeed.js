import React from 'react';

function SearchFeed({ children }) {
  return (
    <div className="rounded-[4px] bg-canvas-light max-w-full mt-[1px]">
      {children}
    </div>
  );
}

export default SearchFeed;
