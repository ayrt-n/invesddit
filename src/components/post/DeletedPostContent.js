import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PostActions from './PostActions';

function DeletedPostContent({ post }) {
  const createdAtDate = Date.parse(post.created_at);

  return (
    <div>
      {/* Meta Text */}
      <div className="py-[8px] grow">
        <div className="text-[12px] leading-[16px] mx-[8px] mb-[8px] flex items-center">
          <span className="mr-[3px] text-meta-text">
            Posted by
          </span>
          <div className="relative">
            <span className="mr-[3px] text-meta-text">
              u/[deleted]
            </span>
          </div>
          <span className="mr-[3px] text-meta-text">
            {formatDistanceToNow(createdAtDate)} ago
          </span>
        </div>
      </div>

      {/* Post Title */}
      <div className="px-[8px]">
        <div className="text-[18px] font-medium leading-[22px] break-all">
          {post.title}
        </div>
      </div>

      {/* Deleted Content Message */}
      <div className="border-[#ea0027] border-[1px] rounded-[4px] flex mt-[16px] mr-[40px] mb-[8px] ml-[8px] py-[4px] pr-[8px] relative">
        <div className="bg-[#ea0027] absolute top-0 bottom-0 w-[8px] inline-block" />
        <div className="mt-[12px] mr-[8px] mb-[8px] ml-[16px] text-feed-text inline-block">
          <svg className="text-[#ea0027] pt-[4px] w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>trash-can</title>
            <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
          </svg>
        </div>
        <div className="my-[8px] inline-block">
          <div className="font-bold text-[12px] leading-[16px]">
            This post was deleted by the person who originally posted it.
          </div>
          <div className="text-[12px] leading-[16px] pt-[4px]">
            It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.
          </div>
        </div>
      </div>

      <PostActions
        showPostDropdown={false}
        commentCount={post.comments_count}
      />
    </div>
  );
}

export default DeletedPostContent;
