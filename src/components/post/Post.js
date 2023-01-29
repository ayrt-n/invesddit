import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostMetaText from './PostMetaText';
import PostSidebar from './PostSidebar';
import PostActions from './PostActions';
import CommentSection from '../comments/CommentSection';

function Post() {
  const { post_id } = useParams();

  const post = {
    "id": 2,
    "title": "New post",
    "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "created_at": "2023-01-27T13:32:05.257Z",
    "comments_count": 0,
    "score": 1,
    "account": {
        "id": 1,
        "username": "finance_dude",
        "created_at": "2023-01-27T13:32:04.743Z"
    },
    "comments": []
  }

  if (!post) return null;

  return (
    <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] rounded-[4px]">
      <div className="flex">
        <PostSidebar id={post.id} score={post.score} />
        
        <div>
          <PostMetaText community={post.community} account={post.account} createdAt={post.created_at} />
          <div className="px-[8px]">
            <div className="text-[18px] font-medium leading-[22px] break-all">
              {post.title}
            </div>
          </div>
          <div className="px-[8px] mt-[5px] mb-[10px]">
            <div className="text-[14px] leading-[21px] break-words ">
              {post.body}
            </div>
          </div>
          <PostActions commentCount={post.comments_count} />
        </div>
      </div>
      <CommentSection comments={post.comments} />
    </div>
  );
}

export default Post;
