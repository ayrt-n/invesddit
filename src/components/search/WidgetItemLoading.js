import React from 'react';
import SkeletonLoader from '../SkeletonLoader';

function WidgetItemLoading() {
  return (
    <div className="border-b-[1px] border-post-border p-[16px]">
      <div className="flex items-center justify-between">
        <SkeletonLoader classNames="rounded-full h-[36px] w-[36px] shrink-0" />
        
        <div className="grow px-[8px] overflow-hidden">
          <div className="flex flex-col items-baseline">
            <SkeletonLoader classNames="h-[10px] w-[80%] rounded-[4px] mb-[4px]" />
            <SkeletonLoader classNames="h-[10px] w-[60%] rounded-[4px]" />
          </div>
        </div>
        <SkeletonLoader classNames="shrink-0 w-[88px] rounded-full h-[36px]" />
      </div>
    </div>
  );
}

export default WidgetItemLoading;
