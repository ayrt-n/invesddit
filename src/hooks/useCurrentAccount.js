import { useContext } from 'react';
import AccountContext from '../contexts/account/AccountContext';

export default function useCurrentAccount() {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error(`useCurrentAccount must be used within AccountProvider`)
  }

  return context;
}
