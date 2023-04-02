import React from 'react';
import SkeletonLoader from '../SkeletonLoader';

const postLoading = <div className="-mt-[1px] border-[1px] border-post-border hover:border-post-border-hover hover:z-10 cursor-pointer first:rounded-t-[4px] last:rounded-b-[4px] relative">
                      <div className="flex flex-col">
                        <div className="p-[16px] w-full">
                          <SkeletonLoader classNames="h-[14px] w-[70%] rounded-[4px]" />
                        </div>
                        <div className="px-[16px] -mt-[8px] flex justify-between w-full">
                          <SkeletonLoader classNames="h-[24px] w-[70%] rounded-[4px]" />
                        </div>
                        <div className="px-[16px] pb-[16px] pt-[8px] text-[12px] text-meta-text leading-[16px] flex w-full">
                          <SkeletonLoader classNames="w-[100px] h-[14px] rounded-[4px] mr-[12px]" />
                          <SkeletonLoader classNames="w-[100px] h-[14px] rounded-[4px]" />
                        </div>
                      </div>
                    </div>

const otherLoading = <div className="-mt-[1px] border-[1px] border-post-border hover:border-post-border-hover hover:z-10 cursor-pointer first:rounded-t-[4px] last:rounded-b-[4px] relative">
                       <div className="flex items-center justify-between p-[16px]">
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

function SearchFeedLoading({ postFeed }) {
  const skeletonLoader = postFeed ? postLoading : otherLoading;

  return (
    <div className="rounded-[4px] bg-canvas-light max-w-full mt-[1px]">
      {skeletonLoader}
      {skeletonLoader}
      {skeletonLoader}
      {skeletonLoader}
      {skeletonLoader}
    </div>
  );
}

export default SearchFeedLoading;