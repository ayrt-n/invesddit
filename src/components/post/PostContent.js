import React, { useState } from 'react';
import PostMetaText from './PostMetaText';
import TextContent from './TextContent';
import MediaContent from './MediaContent';
import LinkContent from './LinkContent';
import PostActions from './PostActions';
import EditPostForm from './EditPostForm';

function PostContent({ post, deletePost, updatePost }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-full">
      {/* Post meta text, including commmunity and post author */}
      <PostMetaText community={post.community} account={post.account} createdAt={post.created_at} />
      <div className="px-[8px]">
        <h1 className="text-[18px] font-medium leading-[22px] break-word">
          {post.title}
        </h1>
      </div>
      
      {/* Render either post edit form, or text/media/link post content */}
      {
        isEditing ?
          <EditPostForm
            postId={post.id}
            content={post.content}
            closeEdit={() => setIsEditing(false)}
            updatePostContent={updatePost}
          /> :
        post.type === 'TextPost' ?
          <TextContent body={post.content} /> :
        post.type === 'MediaPost' ?
          <MediaContent media={post.content} /> :
          <LinkContent link={post.content} />
      }

      {/* Footer with different post actions/links */}
      {/* As of now, can only edit text posts */}
      <PostActions
        commentCount={post.comments_count}
        accountId={post.account.id}
        deletePost={deletePost}
        editPost={post.type === 'TextPost' ? () => setIsEditing(true) : null}
        showPostDropdown={true}
      />
    </div>
  );
}

export default PostContent;
