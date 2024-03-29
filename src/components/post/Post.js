import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostSidebar from './PostSidebar';
import CommentSection from '../comments/CommentSection';
import { deletePost } from '../../services/postService';
import { addRecentPost } from '../../services/recentPostTracker';
import PostContent from './PostContent';
import PostLoading from './PostLoading';
import usePost from '../../hooks/usePost';
import ContentCard from '../ContentCard';

function Post() {
  const { post_id, community_id } = useParams();
  const [post, updatePost] = usePost(post_id);
  const navigate = useNavigate();

  // If post successfully loaded, add to recent post tracker
  useEffect(() => {
    if (!post.isLoading) { addRecentPost({ ...post.data, community: { sub_dir: community_id }}) }
  }, [post, community_id]);

  // If successfully deleted, navigate back to community page
  const deleteCurrentPost = () => {
    deletePost(post_id).then(() => {
      navigate(`/c/${community_id}`);
    })
    .catch(err => {
      console.error(err);
    });
  };

  return (
    <ContentCard className="mb-[10px]">
      <div className="flex">
        {post.isLoading ?
          <PostLoading /> :
          <>
            <PostSidebar
              post={post.data}
              updatePost={updatePost}
            />

            <PostContent
              post={post.data}
              deletePost={deleteCurrentPost}
              updatePost={updatePost}
            />
          </>
        }
      </div>

      {/* Render Comment Section */}
      <CommentSection postId={post_id} />
    </ContentCard>
  );
}

export default Post;
