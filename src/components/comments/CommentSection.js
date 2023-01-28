import React from 'react';
import CommentController from './CommentController';
import CommentForm from './CommentForm';

function CommentSection() {
  return (
    <>
      <div className="my-[24px] mr-[40px] ml-[48px]">
        <CommentForm />
      </div>
      <div className="border-b-[1px] mx-[48px] mb-[4px] pr-[16px]">
        <CommentController />
      </div>
    </>
  );
}

export default CommentSection;
