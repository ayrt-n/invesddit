import React from 'react';

function PostGuidelineWidget() {
  return (
    <div className="bg-canvas-light rounded-[4px] my-[15px] p-[12px]">
      <div className="text-[16px] font-medium leading-[20px] border-b-[1px] border-nav-border min-h-[46px] items-center flex">
        Posting to Invesddit
      </div>
      <ol className="font-medium text-[14px] leading-[18px] list-decimal list-inside">
        <li className="border-b-[1px] border-nav-border py-[10px] px-[5px]">
          Remember the human
        </li>
        <li className="border-b-[1px] border-nav-border py-[10px] px-[5px]">
          Behave like you would in real life
        </li>
        <li className="border-b-[1px] border-nav-border py-[10px] px-[5px]">
          Look for the original source of content
        </li>
        <li className="border-b-[1px] border-nav-border py-[10px] px-[5px]">
          Search for duplicates before posting
        </li>
        <li className="border-b-[1px] border-nav-border py-[10px] px-[5px]">
          Read the community's rules
        </li>
      </ol>
    </div>
  );
}

export default PostGuidelineWidget;
