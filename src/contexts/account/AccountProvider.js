import { useState, useEffect, useMemo } from 'react';
import AccountContext from './AccountContext';
import { getPrivateAccountDetails } from '../../services/accountService';
import { isLoggedIn } from '../../services/authService';

function AccountProvider({ children }) {
  console.log('calling account provider...')

  const [currentAccount, setCurrentAccount] = useState(null);

  useEffect(() => {
    if (isLoggedIn()) {
      getPrivateAccountDetails().then((data) => {
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
