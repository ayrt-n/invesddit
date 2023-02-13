import { config } from './constants';
import defaultHeaders from './defaultHeaders';

const API_URL = config.urls.API_URL;

function getComments(postId, params = {}) {
  const searchParams = new URLSearchParams(params)

  return fetch(`${API_URL}/api/v1/posts/${postId}/comments/?${searchParams}`, {
    method: 'GET',
    mode: 'cors',
    headers: defaultHeaders(),
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.text().then(text => { throw new Error(text) });
    }
  })
}

function createComment(resource, id, values) {
  return fetch(`${API_URL}/api/v1/${resource}/${id}/comments`, {
    method: 'POST',
    mode: 'cors',
    headers: defaultHeaders(),
    body: JSON.stringify({
      body: values.body,
    })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.text().then(text => { throw new Error(text) });
    }
  })
}

export {
  getComments,
  createComment
}
