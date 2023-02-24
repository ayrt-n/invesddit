import React from 'react';
import PostActions from './PostActions';
import PostMetaText from './PostMetaText';
import PostSidebar from './PostSidebar';
import TextPostPreview from './TextPostPreview';
import MediaPostPreview from './MediaPostPreview';
import LinkPostPreview from './LinkPostPreview';
import { Link } from 'react-router-dom';

function PostPreview({ post, communityView, updatePostVoteStatus }) {
  const postLink = `/c/${post.community.sub_dir}/posts/${post.id}`;

  return (
    <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] flex rounded-[4px] hover:border-post-border-hover cursor-pointer">
      <PostSidebar
        id={post.id}
        score={post.score}
        voted={post.vote_status}
        updatePostVoteStatus={updatePostVoteStatus}
        preview
      />

      <div>
        {/* Render Posts Meta Text */}
        {/* If communityView then don't render information on the community */}
        <PostMetaText
          community={communityView ? null : post.community}
          avatar={communityView ? null : post.community.avatar}
          account={post.account}
          createdAt={post.created_at}
        />
        {/* Render Post title and Post body preview */}
        <Link to={postLink}>
          <div className="px-[8px]">
            <div className="text-[18px] font-medium leading-[22px] break-all">
              {post.title}
            </div>
          </div>

          {/* Render preview of content based on post type */}
          {
            post.type === 'TextPost' ?
            <TextPostPreview body={post.body} /> :
            post.type === 'MediaPost' ?
            <MediaPostPreview media={post.image} /> :
            <LinkPostPreview link={post.body} />
          }

          {/* Render Post actions (comment count link) */}
          <PostActions
            commentCount={post.comments_count}
          />
        </Link>
      </div>
    </div>
  );
}

export default PostPreview;
