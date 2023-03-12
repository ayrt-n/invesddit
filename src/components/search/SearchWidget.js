import React from 'react';

function SearchWidget({ header, children }) {
  return (
    <div className="rounded-[4px] mb-[16px] w-full border-[1px] border-post-border bg-canvas-light">
      <h4 className="font-medium text-[16px] leading-[20px] pt-[16px] px-[16px]">
        {header}
      </h4>
      {children}
    </div>
  );
}

export default SearchWidget;
