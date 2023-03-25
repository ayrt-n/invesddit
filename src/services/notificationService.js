import { config } from './constants';
import defaultHeaders from './defaultHeaders';

const API_URL = config.urls.API_URL;

function getNotifications(params = {}) {
  const searchParams = new URLSearchParams(params);

  return fetch(`${API_URL}/api/v1/notifications?${searchParams}`, {
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

function readNotification(notificationId) {
  return fetch(`${API_URL}/api/v1/notifications/${notificationId}`, {
    method: 'PATCH',
    mode: 'cors',
    headers: defaultHeaders(),
    body: JSON.stringify({
      'read': true
    })
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      throw response.text().then(text => { throw new Error(text) });
    }
  });
}

function readAllNotification() {
  return fetch(`${API_URL}/api/v1/notifications`, {
    method: 'PATCH',
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

export {
  getNotifications,
  readNotification,
  readAllNotification,
}
