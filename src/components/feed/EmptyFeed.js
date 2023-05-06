import React from 'react';
import EmptyPost from './EmptyPost';

function EmptyFeed({ children }) {
  return (
    <div className="flex flex-col justify-center items-center h-full min-h-[380px] text-center relative">
      <div className="absolute left-0 top-0 w-full opacity-[0.4] bg-none">
        <EmptyPost />
        <EmptyPost />
        <EmptyPost />
        <EmptyPost />
        <EmptyPost />
        <EmptyPost />
        <EmptyPost />
        <EmptyPost />
        <EmptyPost />
      </div>
      <div className="w-full h-full relative">
        <div className="w-[80%] mx-auto my-[80px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default EmptyFeed;
