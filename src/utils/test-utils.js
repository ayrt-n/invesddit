import React from 'react';
import { render } from '@testing-library/react';
import AuthContext from '../contexts/authentication/AuthContext';
import AccountContext from '../contexts/account/AccountContext';
import ModalProvider from '../contexts/modal/ModalProvider';

// Custom render method to wrap all renders in React context
// Easily set context values for authenticated and account via authContext and accountContext args
function customRender(childComponent, {authValues, accountValues, ...options} = {}) {
  function ProviderWrapper({children}) {
    return (
      <AuthContext.Provider value={authValues || {}}>
        <AccountContext.Provider value={accountValues || {}}>
          <ModalProvider>
            {children}
          </ModalProvider>
        </AccountContext.Provider>
      </AuthContext.Provider>
    );
  }

  return render(childComponent, {wrapper: ProviderWrapper, ...options});
}

export * from '@testing-library/react'
export {customRender as render}