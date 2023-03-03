import { config } from './constants';
import authHeader from './authHeader';
import defaultHeaders from './defaultHeaders';

const API_URL = config.urls.API_URL;

function getAccountDetails() {
  return fetch(`${API_URL}/api/v1/account/edit`, {
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
  });
}

function updateAccountProfile(values) {
  const formData = new FormData();
  for (let key in values) {
    if (values[key]) { formData.append(`account[${key}]`, values[key]) }
  }

  return fetch(`${API_URL}/api/v1/account`, {
    method: 'PATCH',
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

export {
  updateAccountProfile,
  getAccountDetails,
}
