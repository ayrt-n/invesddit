import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostMetaText from './PostMetaText';
import PostSidebar from './PostSidebar';
import PostActions from './PostActions';
import CommentSection from '../comments/CommentSection';
import { getPost } from '../../services/postService';

function Post() {
  const { post_id } = useParams();

  const [post, setPost] = useState(null);
  useEffect(() => {
    getPost(post_id).then(data => setPost(data.data))
  }, [post_id]);

  const updatePostVoteStatus = (_id, status, changeInScore) => {
    setPost((prev) => {
      const updatedScore = parseInt(prev.score) + changeInScore;
      return { ...prev, vote_status: status, score: updatedScore };
    });
  };

  if (!post) return null;

  return (
    <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] rounded-[4px]">
      <div className="flex">
        <PostSidebar
          id={post.id}
          score={post.score}
          voted={post.vote_status}
          updatePostVoteStatus={updatePostVoteStatus}
        />
        
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
      <CommentSection postId={post_id} />
    </div>
  );
}

export default Post;
