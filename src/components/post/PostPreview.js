import React from 'react';
import PostActions from './PostActions';
import PostMetaText from './PostMetaText';
import PostSidebar from './PostSidebar';
import { Link } from 'react-router-dom';
import TextContent from './TextContent';
import MediaContent from './MediaContent';
import LinkContent from './LinkContent';

function PostPreview({ post, communityView, updatePost }) {
  const postLink = `/c/${post.community.sub_dir}/posts/${post.id}`;

  return (
    <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] flex rounded-[4px] hover:border-post-border-hover cursor-pointer relative">
      {/* Link overlay to allow user to click anywhere on post and navigate to the post */}
      <Link tabIndex="0" to={postLink} className="absolute top-0 bottom-0 right-0 left-0 h-full w-full z-1" />

      <PostSidebar
        post={post}
        updatePost={updatePost}
        preview
      />
      
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
          <div className="text-[18px] font-medium leading-[22px] break-word">
            {post.title}
          </div>
        </div>

        {/* Render preview of content based on post type */}
        {/* Need to wrap Text Content in another link to make clickable */}
        {
          post.type === 'TextPost' ?
          <Link to={postLink}><TextContent body={post.content} isPreview /></Link> :
          post.type === 'MediaPost' ?
          <MediaContent media={post.content} isPreview /> :
          <LinkContent link={post.content} isPreview />
        }

        {/* Render Post actions (comment count link) */}
        <PostActions
          showPostDropdown={false}
          commentCount={post.comments_count}
          postLink={postLink}
        />
      </div>
    </div>
  );
}

export default PostPreview;
