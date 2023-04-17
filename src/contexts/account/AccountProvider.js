import { useState, useEffect, useMemo, useCallback } from 'react';
import AccountContext from './AccountContext';
import { getCurrentAccount } from '../../services/accountService';
import { isLoggedIn, getAccountToken } from '../../services/authService';
import { logout } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function AccountProvider({ children }) {
  const navigate = useNavigate();
  const [currentAccount, setCurrentAccount] = useState(null);
  const [token, setToken] = useState(getAccountToken());

  // Query for and save state for current account (username, avatar, etc) if logged in
  // Otherwise, set equal to null
  useEffect(() => {
    if (isLoggedIn()) {
      getCurrentAccount().then((data) => {
        setCurrentAccount(data.data);
      });
    } else {
      setCurrentAccount(null);
    }
  }, [token]);

  // Keep track of loggedIn state when navigating between React router
  // Helpful if user logs out or changes accounts in different tab
  useEffect(() => {
    const accountToken = getAccountToken();

    if (token !== accountToken) {
      setToken(accountToken);
    }
  }, [token, navigate])

  // Logout function - remove token from localStage, set current account null and reload
  const logOut = useCallback(() => {
    logout();
    setCurrentAccount(null);
    setToken(null);
    window.location.reload();
  }, []);

  // Memoized provider values
  const providerValues = useMemo(() => ({
    currentAccount,
    setCurrentAccount,
    logOut,
  }), [currentAccount, setCurrentAccount, logOut]);

  return (
    <AccountContext.Provider value={providerValues}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountProvider;
