import React from 'react';
import PostMetaText from '../post/PostMetaText';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';

function PostResult({ post, searchTerm }) {
  const postLink = `/c/${post.community.sub_dir}/posts/${post.id}`;

  return (
    <div className="-mt-[1px] border-[1px] border-post-border hover:border-post-border-hover hover:z-10 cursor-pointer first:rounded-t-[4px] last:rounded-b-[4px] relative">
      {/* Link overlay to allow user to click anywhere on post and navigate to the post */}
      <Link tabIndex="0" to={postLink} className="absolute top-0 bottom-0 right-0 left-0 h-full w-full z-1" />

      <div className="flex flex-col">
        <div className="px-[8px] pt-[8px]">
          <PostMetaText account={post.account} community={post.community} createdAt={post.created_at} />
        </div>
        <div className="px-[16px] -mt-[8px] flex justify-between">
          <h3 className="text-[16px] font-medium leading-[22px] break-words">
            <Highlighter
              searchWords={[searchTerm]}
              textToHighlight={post.title}
            />
          </h3>
          {post.image &&
            <div className="h-[98px] flex-[0_0_138px] rounded-[4px] w-full h-full bg-cover bg-center" style={{backgroundImage: `url(${post.image})`}} />
          }
        </div>
        <div className="px-[16px] pb-[16px] pt-[8px] text-[12px] text-meta-text leading-[16px] flex">
          <span className="mr-[12px]">
            {post.score} upvote{post.score !== 1 ? 's' : ''}
          </span>
          <span>
            {post.comments_count} comments
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostResult;
