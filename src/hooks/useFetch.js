import { useState, useEffect } from 'react';
import { config } from '../services/constants';
import defaultHeaders from '../services/defaultHeaders';

const API_URL = config.urls.API_URL;

export default function useFetch(path, params) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Query for data
  useEffect(() => {
    const fetchParams = new URLSearchParams(params)

    fetch(`${API_URL}/${path}?${fetchParams}`, {
      method: 'GET',
      mode: 'cors',
      headers: defaultHeaders()
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        setError(response);
        throw response.text().then(text => { throw new Error(text) });
      }
    })
    .then(data => {
      setData(data.data);
      setIsLoading(false);
    })
    .catch(err => {
      console.error(err);
    })
  }, [path, params]);

  return [
    {
      data: data,
      isLoading: isLoading,
      error: error,
    },
    setData,
  ]
}
