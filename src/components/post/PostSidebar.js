import React from 'react';
import { upvotePost, downvotePost } from '../../services/postService';

function PostSidebar({ post }) {
  return (
    <div className="min-w-[40px] bg-post-sidebar flex flex-col items-center py-[8px] rounded-tl-[4px] rounded-bl-[4px]">
      <button onClick={() => upvotePost(post.id)} className="flex items-center justify-items-center">
        <svg className="w-[24px] h-[24px] rounded-[2px] hover:text-upvote hover:bg-icon-hover" viewBox="0 0 24 24">
          <path fill="currentColor" d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z" />
        </svg>
      </button>
      <div className="my-[4px] text-[12px] leading-[16px] font-bold text-center">
        24
      </div>
      <button onClick={() => downvotePost(post.id)}>
        <svg className="w-[24px] h-[24px] rounded-[2px] hover:text-downvote hover:bg-icon-hover" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z" />
        </svg>
      </button>
    </div>
  );
}

export default PostSidebar;
