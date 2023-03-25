import { useEffect, useState } from 'react';

export default function usePagination(apiCallback, pageNumber) {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([])
  const [hasMore, setHasMore] = useState(false);

  // Clear list if callback changes
  useEffect(() => {
    setList([]);
  }, [apiCallback]);
  
  useEffect(() => {
    setIsLoading(true);

    apiCallback({ page: pageNumber }).then(data => {
      if (pageNumber === 1) {
        setList([...data.data]);
        setHasMore(data.data.length > 0);
        setIsLoading(false);
      } else {
        setList(prev => ([...prev, ...data.data]));
        setHasMore(data.data.length > 0);
        setIsLoading(false);
      }
    })
    .catch(err => console.error(err));
  }, [apiCallback, pageNumber, hasMore])

  return { isLoading, list, setList, hasMore }
}