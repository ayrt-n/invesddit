import { config } from './constants';

const API_URL = config.urls.API_URL;

function getCommunity(community) {
  return fetch(`${API_URL}/api/v1/communities/${community}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    return response.json();
  });
}

export {
  getCommunity,
}
