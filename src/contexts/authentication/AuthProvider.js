import { useState, useEffect, useCallback, useMemo } from 'react';
import AuthContext from './AuthContext';
import { logout } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set logged in based on whether account exists in localStorage
    setLoggedIn(!!localStorage.getItem('account'));
  }, [navigate]);

  const logOut = useCallback(() => {
    logout();
    setLoggedIn(false);
    navigate('/')
    window.location.reload();
  }, [navigate]);

  const providerValues = useMemo(() => ({
    loggedIn,
    logOut,
  }), [loggedIn, logOut]);

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
