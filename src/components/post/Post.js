import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostMetaText from './PostMetaText';
import PostSidebar from './PostSidebar';
import PostActions from './PostActions';
import CommentSection from '../comments/CommentSection';
import { getPost, deletePost } from '../../services/postService';
import { addRecentPost } from '../../services/recentPostTracker';
import TextContent from './TextContent';
import MediaContent from './MediaContent';
import LinkContent from './LinkContent';
import ModalContext from '../../contexts/modal/ModalContext';
import ConfirmationModel from '../ConfirmationModal';
import DeletedPostContent from './DeletedPostContent';

function Post() {
  const { openModal, closeModal } = useContext(ModalContext);
  const { post_id } = useParams();
  const { community_id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  // Query API to set post state and track post via recent posts
  useEffect(() => {
    getPost(post_id).then(data => {
      console.log(data.data);
      addRecentPost({ ...data.data, community: { sub_dir: community_id } });
      setPost(data.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [post_id, community_id]);

  // Update post vote status and score in "real time"
  const updatePostVoteStatus = (_id, status, changeInScore) => {
    setPost((prev) => {
      const updatedScore = parseInt(prev.score) + changeInScore;
      return { ...prev, vote_status: status, score: updatedScore };
    });
  };

  // If post successfully deleted, navigate back to community page
  const deleteCurrentPost = () => {
    deletePost(post_id).then(() => {
      navigate(`/c/${community_id}`);
    })
    .catch(err => {
      console.error(err);
    });
  };

  const confirmDelete = () => {
    openModal(
      <ConfirmationModel
        header="Delete post?"
        message="Are you sure you want to delete your post? You can't undo this."
        actionText="Delete post"
        callback={deleteCurrentPost}
        closeModal={closeModal}
      />
    );
  };

  if (!post) return null;

  return (
    <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] rounded-[4px]">
      <div className="flex">
        {/* Render Post Sidebar */}
        <PostSidebar
          id={post.id}
          score={post.score}
          voted={post.vote_status}
          updatePostVoteStatus={updatePostVoteStatus}
        />

        {/* If post status is deleted, render DeletedPostContent */}
        {/* Otherwise, render all components associated with a post */}
        {post.status === 'deleted' ?
          <DeletedPostContent post={post} /> :
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

            <PostActions
              commentCount={post.comments_count}
              account={post.account}
              deletePost={confirmDelete}
              showPostDropdown={true}
            />
          </div>
        }
      </div>

      {/* Render Comment Section */}
      <CommentSection postId={post_id} />
    </div>
  );
}

export default Post;
