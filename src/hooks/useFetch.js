import { useState, useEffect } from 'react';
import { config } from '../services/constants';
import defaultHeaders from '../services/defaultHeaders';

const API_URL = config.urls.API_URL;

export default function useFetch(path, params) {
  // Construct path based on provided path and params
  const fetchParams = new URLSearchParams(params);
  const fullPath = `${API_URL}/${path}?${fetchParams}`;

  // Set up fetch states
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Query for data
  useEffect(() => {
    setIsLoading(true);
    
    fetch(fullPath, {
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
  }, [fullPath]);

  return [
    {
      data: data,
      isLoading: isLoading,
      error: error,
    },
    setData,
  ]
}
