import { config } from './constants';
import authHeader from './authHeader';
import defaultHeaders from './defaultHeaders';

const API_URL = config.urls.API_URL;


function getCurrentAccountCommunities() {
  return fetch(`${API_URL}/api/v1/account/communities`, {
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

function getCurrentAccount() {
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

function getAccount(username) {
  return fetch(`${API_URL}/api/v1/accounts/${username}`, {
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

function searchAccounts(params = {}) {
  const searchParams = new URLSearchParams(params);

  return fetch(`${API_URL}/api/v1/search/accounts?${searchParams}`, {
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
  getCurrentAccount,
  getCurrentAccountCommunities,
  updateAccountProfile,
  getAccount,
  searchAccounts,
}
