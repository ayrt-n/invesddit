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

function createPost(values) {
  return fetch(`${API_URL}/api/v1/communities/${values.community}/posts`, {
    method: 'POST',
    mode: 'cors',
    headers: defaultHeaders(),
    body: JSON.stringify({
      'title': values.title,
      'body': values.body
    })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.text().then(text => { throw new Error(text) });
    }
  });
}

export {
  getPost,
  createPost,
}
