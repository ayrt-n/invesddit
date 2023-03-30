import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AccountContext from '../../contexts/account/AccountContext';

function PublicRoute({ children }) {
  const { currentAccount } = useContext(AccountContext);
  
  return currentAccount ? <Navigate to="/" /> : children
}

export default PublicRoute;