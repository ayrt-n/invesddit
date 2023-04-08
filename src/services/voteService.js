import { config } from './constants';
import defaultHeaders from './defaultHeaders';

const API_URL = config.urls.API_URL;

function upvote(resource, id) {
  return fetch(`${API_URL}/api/v1/${resource}/${id}/votes?upvote`, {
    method: 'POST',
    mode: 'cors',
    headers: defaultHeaders(),
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      throw response.text().then(text => { throw new Error(text) });
    }
  });
}

function downvote(resource, id) {
  return fetch(`${API_URL}/api/v1/${resource}/${id}/votes?downvote`, {
    method: 'POST',
    mode: 'cors',
    headers: defaultHeaders(),
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      throw response.text().then(text => { throw new Error(text) });
    }
  });
}

function deleteVote(resource, id) {
  return fetch(`${API_URL}/api/v1/${resource}/${id}/votes`, {
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
  });
}

export {
  upvote,
  downvote,
  deleteVote,
}