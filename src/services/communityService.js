import { config } from './constants';
import defaultHeaders from './defaultHeaders';

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

export {
  getCommunity,
  joinCommunity,
  leaveCommunity,
}
