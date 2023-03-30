import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AccountContext from '../../contexts/account/AccountContext';

function PrivateRoute({ children }) {
  const { currentAccount } = useContext(AccountContext);
  
  return currentAccount ? children : <Navigate to="/login" />
}

export default PrivateRoute;