import React from 'react';

function MediaContent({ media }) {
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
