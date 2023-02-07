import { config } from './constants';

const API_URL = config.urls.API_URL;

function getComments(postId, params = {}) {
  const searchParams = new URLSearchParams(params)

  return fetch(`${API_URL}/api/v1/posts/${postId}/comments/?${searchParams}`, {
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
  getComments,
}
