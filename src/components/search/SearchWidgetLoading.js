import React from 'react';

function SearchWidgetLoading({ header }) {
  const widgetItemLoading = <div className="border-b-[1px] border-post-border p-[16px]">
                              <div className="flex items-center justify-between">
                                <div className="rounded-full h-[36px] w-[36px] overflow-hidden rounde-full shrink-0 animate-pulse bg-slate-100" />
                                
                                <div className="grow px-[8px] overflow-hidden break-words">
                                  <div className="flex flex-col items-baseline">
                                    <div className="h-[10px] w-[80%] bg-slate-100 animate-pulse rounded-[4px] mb-[4px]" />
                                    <div className="h-[10px] w-[60%] bg-slate-100 animate-pulse rounded-[4px]" />
                                  </div>
                                </div>
                                <div className="shrink-0 w-[88px] rounded-full bg-slate-100 animate-pulse h-[36px]" />
                              </div>
                            </div>

  return (
    <div className="rounded-[4px] mb-[16px] w-full border-[1px] border-post-border bg-canvas-light">
      <h4 className="font-medium text-[16px] leading-[20px] pt-[16px] px-[16px]">
        {header}
      </h4>
      {widgetItemLoading}
      {widgetItemLoading}
      <div className="h-[48px]" />
    </div>
  );
}

export default SearchWidgetLoading;
