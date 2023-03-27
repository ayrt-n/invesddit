import { config } from './constants';
import defaultHeaders from './defaultHeaders';

const API_URL = config.urls.API_URL;

function login(email, password) {
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'login': email,
      'password': password
    })
  })
  .then(response => {
    if (response.ok && response.headers.get('authorization')) {
      localStorage.setItem(
        'account',
        JSON.stringify({
          authorization: response.headers.get('authorization')
        })
      );
    }

    return response.json();
  })
  .catch((err) => {
    console.error(err);
  });
}

function getAccountToken() {
  return localStorage.getItem('account');
}

function isLoggedIn() {
  return !!localStorage.getItem('account');
}

function logout() {
  localStorage.removeItem('account');
}

function createAccount(email, username, password, passwordConfirmation) {
  return fetch(`${API_URL}/create-account`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'login': email,
      'username': username,
      'password': password,
      'password-confirm': passwordConfirmation
    })
  })
  .then(response => {
    return response.json();
  })
  .catch((err) => {
    console.error(err)
  });
}

function verifyAccount(key) {
  return fetch(`${API_URL}/verify-account?key=${key}`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.error(err);
  })
}

function resetPasswordRequest(email) {
  return fetch(`${API_URL}/reset-password-request`, {
    method: 'POST',
    mode: 'cors',
    headers: defaultHeaders(),
    body: JSON.stringify({
      'login': email
    })
  })
  .then(response => {
    return response.json();
  })
  .catch((err) => {
    console.error(err)
  });
}

export {
  login,
  isLoggedIn,
  logout,
  createAccount,
  verifyAccount,
  getAccountToken,
  resetPasswordRequest,
}