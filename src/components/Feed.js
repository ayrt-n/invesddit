import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePostFeed } from '../hooks/usePostFeed';
import PostLoading from './post/PostLoading';
import PostPreview from './post/PostPreview';

function Feed({ subdir, communityView, emptyFeed="No results found" }) {
  // Set current page and get search params for feed queries
  const [page, setPage] = useState(1);
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
    setPosts,
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

  // Update the vote count in real time
  const updatePostVoteStatus = (id, status, changeInScore) => {
    setPosts((prev) => (
      prev.map((post) => {
        if (post.id === id) {
          const updatedScore = parseInt(post.score) + changeInScore;
          return { ...post, vote_status: status, score: updatedScore };
        } else {
          return post;
        }
      })
    ));
  };

  return (
    <>
      {isLoading && page === 1 ?
        <>
          <PostLoading />
          <PostLoading />
          <PostLoading />
        </> :
        posts.length > 0 ?
        posts.map((post, index) => {
          if (posts.length === index + 1) {
            return (
              <div ref={lastPostRef} key={post.id}>
                <PostPreview post={post} updatePostVoteStatus={updatePostVoteStatus} communityView={communityView} />
              </div>
            )
          } else {
            return <PostPreview post={post} key={post.id} communityView={communityView} updatePostVoteStatus={updatePostVoteStatus} />
          }
        }) :
        emptyFeed
      }

      {isLoading && page !== 1 ?
        <PostLoading /> :
        null
      }
    </>
  );
}

export default Feed;