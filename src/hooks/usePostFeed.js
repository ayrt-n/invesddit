import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPostFeed } from '../services/feedService';

export function usePostFeed(subdir) {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let feedParams = {
      sort_by: searchParams.get('sort_by'),
      filter: searchParams.get('filter'),
    }

    getPostFeed(subdir, feedParams).then(data => {
      setPosts(data.data);
    });
  }, [subdir, searchParams]);

  return [posts, setPosts]
}
