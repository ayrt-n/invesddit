import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePostFeed } from '../../hooks/usePostFeed';
import PostLoading from '../post/PostLoading';
import PostPreview from '../post/PostPreview';

function Feed({ subdir, communityView, emptyFeed="No results found" }) {
  // Set page state for pagination 
  const [page, setPage] = useState(1);

  // Get Search Params for feed query
  const [searchParams] = useSearchParams();
  const feedParams = useMemo(() => (
    {
      sort_by: searchParams.get('sort_by'),
      filter: searchParams.get('filter'),
    }
  ), [searchParams]);

  // If the feed params change, reset to first page
  useEffect(() => {
    setPage(1);
  }, [feedParams])

  const {
    posts,
    updatePosts,
    isLoading,
    hasMore
  } = usePostFeed(subdir, feedParams, page);

  // Set up ref / observer to identify when the last post enters the screen
  // Once last post in view, if there are more posts, set page to next page
  const observer = useRef();
  const lastPostRef = useCallback((node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <>
      {/* If first page and loading, show several loaders */}
      {/* Else, render either the post feed or an empty feed message/component */}
      {isLoading && page === 1 ?
        <>
          <PostLoading isPreview />
          <PostLoading isPreview />
          <PostLoading isPreview />
        </> :
        posts.length > 0 ?
        posts.map((post, index) => {
          if (posts.length === index + 1) {
            return (
              <div ref={lastPostRef} key={post.id}>
                <PostPreview post={post} updatePost={updatePosts} communityView={communityView} />
              </div>
            )
          } else {
            return <PostPreview post={post} key={post.id} communityView={communityView} updatePost={updatePosts} />
          }
        }) :
        emptyFeed
      }

      {/* If not first page and loading, show a single loader under posts */}
      {isLoading && page !== 1 ?
        <PostLoading isPreview /> :
        null
      }
    </>
  );
}

export default Feed;
