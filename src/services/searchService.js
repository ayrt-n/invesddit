import { config } from './constants';
import defaultHeaders from './defaultHeaders';

const API_URL = config.urls.API_URL;

function getSearchResults(query) {
  return fetch(`${API_URL}/api/v1/search?q=${query}`, {
    method: 'GET',
    mode: 'cors',
    headers: defaultHeaders,
  })
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.error(err);
  })
}

export {
  getSearchResults,
}
