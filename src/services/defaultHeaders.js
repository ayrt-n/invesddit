import authHeader from './authHeader';

export default function defaultHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  if (authHeader()) { headers['Authorization'] = authHeader(); }

  return headers
}
