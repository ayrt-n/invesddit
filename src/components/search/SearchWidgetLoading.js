import React from 'react';
import WidgetItemLoading from './WidgetItemLoading';

function SearchWidgetLoading({ header }) {
  return (
    <div className="rounded-[4px] mb-[16px] w-full border-[1px] border-post-border bg-canvas-light">
      <h4 className="font-medium text-[16px] leading-[20px] pt-[16px] px-[16px]">
        {header}
      </h4>
      <WidgetItemLoading />
      <WidgetItemLoading />
      <div className="h-[48px]" />
    </div>
  );
}

export default SearchWidgetLoading;
