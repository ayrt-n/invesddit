import React from 'react';

function MediaPostPreview({ media }) {
  return (
    <div className="mt-[8px] w-full max-h-[512px] mx-auto flex justify-center">
      <div className="text-[14px] leading-[21px] break-all">
        <div>
          <img className="max-h-[512px] mx-auto max-w-full" src={media} alt="user post" />
        </div>
      </div>
    </div>
  );
}

export default MediaPostPreview;
