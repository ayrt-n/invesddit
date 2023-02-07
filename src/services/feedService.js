import { config } from './constants';

const API_URL = config.urls.API_URL;

function getPostFeed(params = {}) {
  const searchParams = new URLSearchParams(params)

  return fetch(`${API_URL}/api/v1/posts?${searchParams}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    return response.json();
  })
}

export {
  getPostFeed
}