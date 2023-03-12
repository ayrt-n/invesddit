import React from 'react';

function SearchPostLoading() {
  const postLoading = <div className="-mt-[1px] border-[1px] border-post-border hover:border-post-border-hover hover:z-10 cursor-pointer first:rounded-t-[4px] last:rounded-b-[4px] relative">
                        <div className="flex flex-col">
                          <div className="p-[16px] w-full">
                            <div className="h-[14px] bg-slate-100 w-[70%] rounded-[4px] animate-pulse" />
                          </div>
                          <div className="px-[16px] -mt-[8px] flex justify-between w-full">
                            <div className="h-[24px] bg-slate-100 w-[70%] rounded-[4px] animate-pulse" />
                          </div>
                          <div className="px-[16px] pb-[16px] pt-[8px] text-[12px] text-meta-text leading-[16px] flex w-full">
                            <div className="w-[100px] h-[14px] animate-pulse bg-slate-100 rounded-[4px] mr-[12px]" />
                            <div className="w-[100px] h-[14px] animate-pulse bg-slate-100  rounded-[4px]" />
                          </div>
                        </div>
                      </div>

  return (
    <div className="rounded-[4px] bg-canvas-light max-w-full mt-[1px]">
      {postLoading}
      {postLoading}
      {postLoading}
      {postLoading}
      {postLoading}
    </div>
  );
}

export default SearchPostLoading;