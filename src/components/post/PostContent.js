import React, { useState } from 'react';
import PostMetaText from './PostMetaText';
import TextContent from './TextContent';
import MediaContent from './MediaContent';
import LinkContent from './LinkContent';
import PostActions from './PostActions';
import EditPostForm from './EditPostForm';

function PostContent({ post, deletePost, updatePost }) {
  const [isEditting, setIsEditting] = useState(false);

  return (
    <div className="w-full">
      {/* Post meta text, including commmunity and post author */}
      <PostMetaText community={post.community} account={post.account} createdAt={post.created_at} />
      <div className="px-[8px]">
        <div className="text-[18px] font-medium leading-[22px] break-all">
          {post.title}
        </div>
      </div>
      
      {/* Render either post edit form, or text/media/link post content */}
      {
        isEditting ?
          <EditPostForm
            postId={post.id}
            body={post.body}
            closeEdit={() => setIsEditting(false)}
            updatePostContent={updatePost}
          /> :
        post.type === 'TextPost' ?
          <TextContent body={post.body} /> :
        post.type === 'MediaPost' ?
          <MediaContent media={post.image} /> :
          <LinkContent link={post.body} />
      }

      {/* Footer with different post actions/links */}
      {/* As of now, can only edit text posts */}
      <PostActions
        commentCount={post.comments_count}
        accountId={post.account.id}
        deletePost={deletePost}
        editPost={post.type === 'TextPost' ? () => setIsEditting(true) : null}
        showPostDropdown={true}
      />
    </div>
  );
}

export default PostContent;
