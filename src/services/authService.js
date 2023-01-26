import { config } from './constants';

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
    if (response.headers.get('authorization')) {
      localStorage.setItem(
        'account',
        JSON.stringify({
          authorization: response.headers.get('authorization')
        })
      );
    }
    
    return response.json();
  });
}

function logout() {
  localStorage.removeItem('account')
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
  });
}

export {
  login,
  createAccount,
}