import { config } from './constants';
import defaultHeaders from './defaultHeaders';

const API_URL = config.urls.API_URL;

function getPost(id) {
  return fetch(`${API_URL}/api/v1/posts/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: defaultHeaders(),
  })
  .then(response => {
    return response.json();
  })
}

export {
  getPost,
}
