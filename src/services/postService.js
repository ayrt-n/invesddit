import { config } from './constants';

const API_URL = config.urls.API_URL;

function getPost(id) {
  return fetch(`${API_URL}/api/v1/posts/${id}`, {
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

function upvotePost(id) {
  return fetch(`${API_URL}/api/v1/posts/${id}/votes?upvote`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoxLCJhdXRoZW50aWNhdGVkX2J5IjpbInBhc3N3b3JkIl19.1HcMMyaK69zaOBRCzwYWcZNbysFPkVR8ikacb_Hy1RA'
    }
  })
  .then(response => {
    return response.json();
  })
}

function downvotePost(id) {
  return fetch(`${API_URL}/api/v1/posts/${id}/votes?downvote`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoxLCJhdXRoZW50aWNhdGVkX2J5IjpbInBhc3N3b3JkIl19.1HcMMyaK69zaOBRCzwYWcZNbysFPkVR8ikacb_Hy1RA'
    }
  })
  .then(response => {
    return response.json();
  })
}

export {
  getPost,
  upvotePost,
  downvotePost,
}
