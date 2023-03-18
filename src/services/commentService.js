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

function createComment(postId, values) {
  return fetch(`${API_URL}/api/v1/posts/${postId}/comments`, {
    method: 'POST',
    mode: 'cors',
    headers: defaultHeaders(),
    body: JSON.stringify({
      body: values.body,
      reply_id: values.commentId,
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

function deleteComment(commentId) {
  return fetch(`${API_URL}/api/v1/comments/${commentId}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: defaultHeaders(),
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      throw response.text().then(text => { throw new Error(text) });
    }
  })
}

export {
  getComments,
  createComment,
  deleteComment,
}
