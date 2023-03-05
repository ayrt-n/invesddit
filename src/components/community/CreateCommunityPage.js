import React from 'react';
import NewCommunityForm from './NewCommunityForm';


function CreatePostPage() {
  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        <div className="w-[640px]">
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
