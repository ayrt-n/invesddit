import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import ModalContext from '../../../contexts/modal/ModalContext';
import AccountContext from '../../../contexts/account/AccountContext';
import { MemoryRouter } from 'react-router-dom';
import { isLoggedIn } from '../../../services/authService';

// Mocks for auth and complex components
jest.mock('../../../services/authService', () => ({
  isLoggedIn: jest.fn(),
}));

jest.mock('../NotificationsDropdown', () => () => (
  <div data-testid="notifications-dropdown" />
));

jest.mock('../NavDropdown', () => () => (
  <div data-testid="nav-dropdown" />
));

// Custom render method using modal context
const customRender = (childComponent, {accountProps, modalProps, ...renderOptions}) => {
  return render(
    <AccountContext.Provider {...accountProps}>
      <ModalContext.Provider {...modalProps}>
        {childComponent}
      </ModalContext.Provider>
    </AccountContext.Provider>,
    renderOptions
  );
};

describe('Navbar component', () => {
  describe('when logged in', () => {
    it('displays notifications and account menu', () => {
      isLoggedIn.mockReturnValueOnce(true);
      const providerProps = {
        accountProps: { value: { currentAccount: null, logOut: null } },
        modalProps: { value: { openModal: null, closeModal: null } }
      };

      customRender(<Navbar />, { ...providerProps, wrapper: MemoryRouter });

      expect(screen.getByTestId('notifications-dropdown')).toBeInTheDocument();
      expect(screen.getByTestId('nav-dropdown')).toBeInTheDocument();
    });
  });

  describe('when not logged in', () => {
    it('renders sign up and log in button', () => {
      isLoggedIn.mockReturnValueOnce(false);
      const providerProps = {
        accountProps: { value: { currentAccount: null, logOut: null } },
        modalProps: { value: { openModal: null, closeModal: null } }
      };

      customRender(<Navbar />, { ...providerProps, wrapper: MemoryRouter });

      expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
    });
  });
});
