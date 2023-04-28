import React from 'react';
import { render } from '@testing-library/react';
import AuthContext from '../contexts/authentication/AuthContext';
import AccountContext from '../contexts/account/AccountContext';
import ModalProvider from '../contexts/modal/ModalProvider';
import { MemoryRouter } from 'react-router-dom';

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

function renderWithMemoryRouter(childComponent, {routerProps, ...renderOptions}) {
  customRender(
    <MemoryRouter {...routerProps}>
      {childComponent}
    </MemoryRouter>,
    renderOptions
  );
}

export * from '@testing-library/react'
export {customRender as render}
export {renderWithMemoryRouter}