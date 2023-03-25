import { useState, useEffect } from 'react';
import { getPostFeed } from '../services/feedService';

export function usePostFeed(subdir, feedParams, pageNumber) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  // Clear list if callback changes
  useEffect(() => {
    setPosts([]);
  }, [subdir]);
 
  useEffect(() => {
    setIsLoading(true);

    getPostFeed(subdir, { page: pageNumber, ...feedParams }).then(data => {
      if (pageNumber === 1) {
        setPosts([...data.data]);
        setHasMore(data.data.length > 0);
        setIsLoading(false);
      } else {
        setPosts(prev => ([...prev, ...data.data]));
        setHasMore(data.data.length > 0);
        setIsLoading(false);
      }
    })
    .catch(err => console.error(err));
  }, [subdir, feedParams, pageNumber, hasMore])

  return { posts, setPosts, isLoading, hasMore }
}
