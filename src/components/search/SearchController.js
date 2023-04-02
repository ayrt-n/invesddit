import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchController() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (value) => {
    setSearchParams(searchParams => {
      searchParams.set('type', value);
      return searchParams;
    })
  }

  // Get searchFor value based on searchParams OR default to posts
  const type = searchParams.get('type') || 'posts';

  return (
    <div className="flex items-center mb-[24px]">
      <button onClick={() => handleClick('posts')} className={`mr-[4px] font-bold py-[12px] px-[20px] flex items-center rounded-full justify center align-center w-auto border-none text-[14px] min-h-[32px] min-w-[32px] leading-[17px] font-noto hover:bg-controls-hover active:bg-controls-active ${type === 'posts' ? 'bg-comment-controls' : 'bg-inherit'}`}>
        Posts
      </button>
      <button onClick={() => handleClick('communities')} className={`mr-[4px] font-bold py-[12px] px-[20px] flex items-center rounded-full justify center align-center w-auto border-none text-[14px] min-h-[32px] min-w-[32px] leading-[17px] font-noto hover:bg-controls-hover active:bg-controls-active ${type === 'communities' ? 'bg-comment-controls' : 'bg-inherit'}`}>
        Communities
      </button>
      <button onClick={() => handleClick('accounts')} className={`mr-[4px] font-bold py-[12px] px-[20px] flex items-center rounded-full justify center align-center w-auto border-none text-[14px] min-h-[32px] min-w-[32px] leading-[17px] font-noto hover:bg-controls-hover active:bg-controls-active ${type === 'accounts' ? 'bg-comment-controls' : 'bg-inherit'}`}>
        Accounts
      </button>
    </div>
  );
}

export default SearchController;
