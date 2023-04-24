import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/authentication/AuthContext';

function PublicRoute({ children }) {
  const auth = useContext(AuthContext);

  return auth.isAuthenticated ? <Navigate to="/" /> : children
}

export default PublicRoute;