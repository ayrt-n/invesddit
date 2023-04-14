import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostSidebar from './PostSidebar';
import CommentSection from '../comments/CommentSection';
import { deletePost } from '../../services/postService';
import { addRecentPost } from '../../services/recentPostTracker';
import DeletedPostContent from './DeletedPostContent';
import PostContent from './PostContent';
import PostLoading from './PostLoading';
import usePost from '../../hooks/usePost';

function Post() {
  const { post_id, community_id } = useParams();
  const [post, updatePost] = usePost(post_id);
  const navigate = useNavigate();

  // If post successfully loaded, add to recent post tracker
  useEffect(() => {
    if (post?.data) { addRecentPost({ ...post.data, community: { sub_dir: community_id }}) }
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

  if (post.isLoading) return <PostLoading />;

  return (
    <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] rounded-[4px]">
      <div className="flex">
        {/* Render Post Sidebar */}
        <PostSidebar
          post={post.data}
          updatePost={updatePost}
        />

        {/* If post status is deleted, render DeletedPostContent */}
        {/* Otherwise, render all components associated with a post */}
        {post.data.status === 'deleted' ?
          <DeletedPostContent post={post.data} /> :
          <PostContent
            post={post.data}
            deletePost={deleteCurrentPost}
            updatePost={updatePost}
          />
        }
      </div>

      {/* Render Comment Section */}
      <CommentSection postId={post_id} />
    </div>
  );
}

export default Post;
