import React from 'react';
import NewCommunityForm from './NewCommunityForm';


function CreatePostPage() {
  return (
    <div className="py-[20px] md:px-[24px]">
      <div className="mx-auto max-w-[640px] flex">
        <div className="w-full">
          <div className="p-[4px] my-[16px] border-b-[1px] border-nav-border min-h-[43px]">
            <div className="text-[18px] font-medium leading-[22px]">
              Create Community
            </div>
          </div>
          
          <NewCommunityForm />
        </div>
      </div>
    </div>
  );
}

export default CreatePostPage;
