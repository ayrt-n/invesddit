import React from 'react';
import PostGuidelineWidget from './PostGuidelineWidget';
import TextPostForm from './TextPostForm';

function PostForm() {
  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        <div className="w-[640px]">
          <div className="p-[4px] my-[16px] border-b-[1px] border-nav-border min-h-[43px]">
            <div className="text-[18px] font-medium leading-[22px]">
              Create Post
            </div>
          </div>
          <div className="mb-[8px]">
            <div className="mr-[16px] w-[300px] h-[40px] bg-canvas-light rounded-[4px] border-nav-border">
              
            </div>
          </div>
          <div className="bg-canvas-light mb-[15px] rounded-[5px] overflow-hidden w-full">
            <div className="flex items-stretch">
              <button className="grow text-[14px] text-primary-500 border-b-[2px] border-b-primary-500 font-bold leading-[18px] py-[15px] px-[17px] cursor-pointer text-center flex items-center justify-center border-r-[1px] border-b-[1px] border-nav-border rounded-0 hover:bg-blue-50">
                <svg className="w-[20px] h-[20px] mr-[8px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>text-box-outline</title>
                  <path fill="currentColor" d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" />
                </svg>
                Post
              </button>
              <button className="cursor-not-allowed grow text-[14px] text-post-border font-bold leading-[18px] py-[15px] px-[17px] text-center flex items-center justify-center border-r-[1px] border-b-[1px] border-nav-border rounded-0">
                <svg className="w-[20px] h-[20px] mr-[8px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>image-multiple-outline</title>
                  <path fill="currentColor" d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,11.47L8.5,15H19.5L15.96,10.29Z" />
                </svg>
                Images & Video
              </button>
              <button className="cursor-not-allowed grow text-[14px] text-post-border font-bold leading-[18px] py-[15px] px-[17px] text-center flex items-center justify-center border-r-[1px] border-b-[1px] border-nav-border rounded-0">
                <svg className="w-[20px] h-[20px] mr-[8px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>link-variant</title>
                  <path fill="currentColor" d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
                </svg>
                Link
              </button>
            </div>

            <TextPostForm community="GOOG" />
          </div>
        </div>

        <div className="w-[312px] ml-[24px] pt-[27px] hidden md:block">
          <PostGuidelineWidget />
        </div>
      </div>
    </div>
  );
}

export default PostForm;
