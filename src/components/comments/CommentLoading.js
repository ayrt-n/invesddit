import React from 'react';
import SkeletonLoader from '../SkeletonLoader';

function CommentLoading() {
  return (
    <div className="pt-[8px] pl-[8px] flex">
      <div className="flex items-center flex-col w-[24px]">
        <div className="my-[6px] min-h-[28px] min-w-[28px]">
          <SkeletonLoader className="w-[28px] h-[28px] rounded-full" />
        </div>
      </div>
      <div className="ml-[8px] max-w-[800px] w-full">
        <div className="mt-[10px] mb-[6px] min-h-[18px]">
          <SkeletonLoader className="h-[10px] w-[150px]" />
        </div>
        <SkeletonLoader className="h-[75px] w-full" />
      </div>
    </div>
  );
}

export default CommentLoading;
