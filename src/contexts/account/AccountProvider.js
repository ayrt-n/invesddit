import { useState, useEffect, useMemo } from 'react';
import AccountContext from './AccountContext';
import { getCurrentAccount } from '../../services/accountService';
import { isLoggedIn } from '../../services/authService';

function AccountProvider({ children }) {
  const [currentAccount, setCurrentAccount] = useState(null);

  useEffect(() => {
    if (isLoggedIn()) {
      getCurrentAccount().then((data) => {
        setCurrentAccount(data.data);
      });
    }
  }, []);

  const providerValues = useMemo(() => ({
    currentAccount,
    setCurrentAccount,
  }), [currentAccount, setCurrentAccount]);

  return (
    <AccountContext.Provider value={providerValues}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountProvider;
