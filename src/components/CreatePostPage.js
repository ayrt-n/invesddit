import React from 'react';
import PostForm from './PostForm';
import PostGuidelineWidget from './PostGuidelineWidget';


function CreatePostPage() {
  return (
    <div className="py-[20px] md:px-[24px]">
      <div className="mx-auto max-w-min flex">
        <div className="w-[640px]">
          <div className="p-[4px] my-[16px] border-b-[1px] border-nav-border min-h-[43px]">
            <div className="text-[18px] font-medium leading-[22px]">
              Create Post
            </div>
          </div>
          
          <PostForm />
        </div>

        <div className="w-[312px] ml-[24px] pt-[27px] hidden md:block">
          <PostGuidelineWidget />
        </div>
      </div>
    </div>
  );
}

export default CreatePostPage;
