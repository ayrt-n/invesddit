import React from 'react';

function MediaContent({ media, isPreview }) {
  if (isPreview) return (
    <div className="mt-[8px] w-full max-h-[512px] mx-auto flex justify-center">
      <div className="text-[14px] leading-[21px] break-all">
        <div>
          <img className="max-h-[512px] mx-auto max-w-full mb-[4px]" src={media} alt="user post" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="ml-[8px] mt-[12px] mb-[10px] pr-[16px]">
      <div className="mx-auto flex justify-center">
        <a href={media} target="_blank" rel="noreferrer noopener" >
          <img className="max-h-[700px] mx-auto max-w-full" src={media} alt="user post" />
        </a>
      </div>
    </div>
  );
}

export default MediaContent;
