import React from 'react';
import PostActions from './PostActions';
import PostSidebar from './PostSidebar';

function Post({ post }) {
  return (
    <div className="bg-canvas-light border-1 border-post-border mb-[10px] flex overflow-hidden rounded-[4px]">
      <PostSidebar />
      <div>
        <div className="py-[8px] grow">
          <div className="text-[12px] leading-[16px] mx-[8px] mb-[8px] flex">
            <span className="font-bold hover:underline">
              {`r/${post.community}`}
            </span>
            <span className="mx-[4px] text-meta-text">
            •
            </span>
            <span className="mr-[3px] text-meta-text">
              Posted by
            </span>
            <span className="mr-[3px] text-meta-text hover:underline">
              u/artn
            </span>
            <span className="mr-[3px] text-meta-text">
              6 hours ago
            </span>
          </div>
        </div>
        <div className="px-[8px]">
          <div className="text-[18px] font-medium leading-[22px] break-all">
            {post.title}
          </div>
        </div>
        <div className="px-[8px] mt-[5px] mb-[10px] max-h-[250px] overflow-hidden">
          <div className="text-[14px] leading-[21px] break-words ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <PostActions />
      </div>
    </div>
  );
}

export default Post;
