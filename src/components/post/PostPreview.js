import React from 'react';
import PostActions from './PostActions';
import PostMetaText from './PostMetaText';
import PostSidebar from './PostSidebar';

function PostPreview({ post, communityView }) {
  return (
    <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] flex rounded-[4px] hover:border-post-border-hover cursor-pointer">
      <PostSidebar id={post.id} score={post.score} preview />
      
      <div>
        {/* Render Posts Meta Text */}
        {/* If communityView then don't render information on the community */}
        <PostMetaText
          community={communityView ? null : post.community}
          account={post.account}
          createdAt={post.created_at}
        />

        {/* Render Post title and Post body preview */}
        <div className="px-[8px]">
          <div className="text-[18px] font-medium leading-[22px] break-all">
            {post.title}
          </div>
        </div>
        <div className="px-[8px] mt-[5px] mb-[10px] max-h-[250px] overflow-hidden gradient-mask-b-60">
          <div className="text-[14px] leading-[21px] break-words ">
            {post.body}
          </div>
        </div>

        {/* Render Post actions (comment count link) */}
        <PostActions
          commentCount={post.comments_count}
          link={`/c/${post.community.sub_dir}/posts/${post.id}`}
        />
      </div>
    </div>
  );
}

export default PostPreview;
