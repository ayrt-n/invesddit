import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('account')
  );

  const login = (account) => {
    localStorage.setItem('account', JSON.stringify(account));
    setIsAuthenticated(true);
  };

  const logOut = () => {
    localStorage.removeItem('account');
    setIsAuthenticated(false);
  }

  // Keep track of changes to localStorage to keep state up-to-date across tabs/windows
  useEffect(() => {
    const storageListener = (event) => {
      if (event.storageArea === localStorage && event.key === 'account') {
        setIsAuthenticated(!!localStorage.getItem('account'));
      }
    };

    window.addEventListener('storage', storageListener);

    return () => {
      window.removeEventListener('storage', storageListener);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        login: login,
        logOut: logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
