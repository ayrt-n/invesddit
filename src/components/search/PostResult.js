import React from 'react';
import PostMetaText from '../post/PostMetaText';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Highlighter from 'react-highlight-words';

function PostResult({ post }) {
  const navigate = useNavigate();
  const postLink = `/c/${post.community.sub_dir}/posts/${post.id}`;
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q');

  // On click, navigate to the post
  // Used over anchor/link because of nested links/buttons within the post
  const handleClick = () => {
    navigate(postLink);
  };

  return (
    <div onClick={handleClick} className="-mt-[1px] border-[1px] border-post-border hover:border-post-border-hover hover:z-10 cursor-pointer first:rounded-t-[4px] last:rounded-b-[4px] relative">
      <div className="flex flex-col">
        <div className="px-[8px] pt-[8px]">
          <PostMetaText account={post.account} community={post.community} createdAt={post.created_at} />
        </div>
        <div className="px-[16px] -mt-[8px] flex justify-between">
          <h3 className="text-[16px] font-medium leading-[22px] break-all">
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
