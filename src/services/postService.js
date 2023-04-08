import { config } from './constants';
import defaultHeaders from './defaultHeaders';
import authHeader from './authHeader';

const API_URL = config.urls.API_URL;

function getPost(id) {
  return fetch(`${API_URL}/api/v1/posts/${id}`, {
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

function createPost(values) {
  switch(values.postType) {
    case 'media':
      return createMediaPost(values);
    case 'link':
      return createLinkPost(values);
    default:
      return createTextPost(values);
  }
}

function createTextPost(values) {
  return fetch(`${API_URL}/api/v1/communities/${values.community}/text_posts`, {
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

function createMediaPost(values) {
  const formData = new FormData();
  formData.append("post[title]", values.title)
  formData.append("post[image]", values.media)

  return fetch(`${API_URL}/api/v1/communities/${values.community}/media_posts`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Authorization': authHeader() },
    body: formData
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.text().then(text => { throw new Error(text) });
    }
  });
}

function createLinkPost(values) {
  return fetch(`${API_URL}/api/v1/communities/${values.community}/link_posts`, {
    method: 'POST',
    mode: 'cors',
    headers: defaultHeaders(),
    body: JSON.stringify({
      'title': values.title,
      'body': values.link,
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

function deletePost(post_id) {
  return fetch(`${API_URL}/api/v1/posts/${post_id}`, {
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

function updatePost(postId, values) {
  return fetch(`${API_URL}/api/v1/posts/${postId}`, {
    method: 'PATCH',
    mode: 'cors',
    headers: defaultHeaders(),
    body: JSON.stringify({
      'body': values.content
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

function searchPosts(params = {}) {
  const searchParams = new URLSearchParams(params);

  return fetch(`${API_URL}/api/v1/search/posts?${searchParams}`, {
    method: 'GET',
    mode: 'cors',
    headers: defaultHeaders()
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
  getPost,
  createPost,
  deletePost,
  updatePost,
  searchPosts,
}
