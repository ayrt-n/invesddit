import React from 'react';

function LinkPostPreview({ link }) {
  return (
    <div onClick={(e) => e.stopPropagation()} className="px-[8px] my-[5px] w-min font-noto">
      <a className="hover:underline text-[12px] leading-[16px] whitespace-nowrap text-link-text flex align-center" href={link} rel="noopener nofollow ugc noreferrer" target="_blank">
        {link}
        <svg className="pl-[4px] inline-block w-[16px] h-[16px] align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>open-in-new</title>
          <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
        </svg>
      </a>
    </div>
  );
}

export default LinkPostPreview;
