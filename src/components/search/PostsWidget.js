import React from 'react';
import EmptyPostsSearch from './EmptyPostsSearch';
import PostResult from './PostResult';

function PostsWidget({ posts, loading, searchTerm }) {
  if (loading) return null;

  return (
    <>
      {posts.length > 0 ?
        <div className="rounded-[4px] bg-canvas-light max-w-full mt-[1px]">
          {posts.map(post => (
            <PostResult post={post} key={post.id} searchTerm={searchTerm} />
          ))}
        </div> :
        <EmptyPostsSearch searchTerm={searchTerm} />
      }
    </>
  );
}

export default PostsWidget;
