import { config } from './constants';
import defaultHeaders from './defaultHeaders';
import authHeader from './authHeader';

const API_URL = config.urls.API_URL;

function getCommunity(community) {
  return fetch(`${API_URL}/api/v1/communities/${community}`, {
    method: 'GET',
    mode: 'cors',
    headers: defaultHeaders(),
  })
  .then(response => {
    return response.json();
  })
}

function joinCommunity(community) {
  return fetch(`${API_URL}/api/v1/communities/${community}/memberships`, {
    method: 'POST',
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

function leaveCommunity(community) {
  return fetch(`${API_URL}/api/v1/communities/${community}/memberships`, {
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

function createCommunity(values) {
  const formData = new FormData();
  for (let key in values) {
    if (values[key]) { formData.append(`community[${key}]`, values[key]) }
  }

  return fetch(`${API_URL}/api/v1/communities/`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Authorization': authHeader() },
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.text().then(text => { throw new Error(text) });
    }
  })
}

function updateCommunity(values) {
  const formData = new FormData();
  for (let key in values) {
    if (values[key]) { formData.append(`community[${key}]`, values[key]) }
  }

  return fetch(`${API_URL}/api/v1/communities/${values.community}`, {
    method: 'PATCH',
    mode: 'cors',
    headers: { 'Authorization': authHeader() },
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.text().then(text => { throw new Error(text) });
    }
  })
}

function getCommunities(q) {
  return fetch(`${API_URL}/api/v1/communities?q=${q}`, {
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
  getCommunity,
  joinCommunity,
  leaveCommunity,
  createCommunity,
  updateCommunity,
  getCommunities,
}
