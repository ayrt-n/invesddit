import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostMetaText from './PostMetaText';
import PostSidebar from './PostSidebar';
import PostActions from './PostActions';
import CommentSection from '../comments/CommentSection';
import { getPost } from '../../services/postService';
import { addRecentPost } from '../../services/recentPostTracker';
import TextContent from './TextContent';
import MediaContent from './MediaContent';
import LinkContent from './LinkContent';

function Post() {
  const { post_id } = useParams();
  const { community_id } = useParams();
  const [post, setPost] = useState(null);

  // Query API to set post state and track post via recent posts
  useEffect(() => {
    getPost(post_id).then(data => {
      addRecentPost({ ...data.data, community: { sub_dir: community_id } });
      setPost(data.data);
    });
  }, [post_id, community_id]);

  // Update post vote status and score in "real time"
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
          
          {
            post.type === 'TextPost' ?
            <TextContent body={post.body} /> :
            post.type === 'MediaPost' ?
            <MediaContent media={post.image} /> :
            <LinkContent link={post.body} />
          }

          <PostActions commentCount={post.comments_count} />
        </div>
      </div>
      <CommentSection postId={post_id} />
    </div>
  );
}

export default Post;
