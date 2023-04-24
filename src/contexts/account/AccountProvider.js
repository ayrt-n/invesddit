import { useState, useEffect } from 'react';
import AccountContext from './AccountContext';
import { getCurrentAccount } from '../../services/accountService';
import useAuth from '../../hooks/useAuth';

function AccountProvider({ children }) {
  const auth = useAuth();
  const [currentAccount, setCurrentAccount] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(() => {
    setCurrentAccount(prev => ({ ...prev, isLoading: true }));

    if (auth.isAuthenticated) {
      getCurrentAccount().then((data) => {
        setCurrentAccount({ data: data.data, isLoading: false });
      });
    } else {
      setCurrentAccount({ data: null, isLoading: false });
    }
  }, [auth]);

  return (
    <AccountContext.Provider value={{currentAccount, setCurrentAccount}}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountProvider;
