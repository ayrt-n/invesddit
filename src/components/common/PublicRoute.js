import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../services/authService';

function PublicRoute({ children }) {
  return isLoggedIn() ? <Navigate to="/" /> : children
}

export default PublicRoute;