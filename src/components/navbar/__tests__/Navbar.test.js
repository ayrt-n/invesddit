import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import { MemoryRouter } from 'react-router-dom';

// Mock components
jest.mock('../NotificationsDropdown', () => () => (
  <div data-testid="notifications-dropdown" />
));

jest.mock('../NavDropdown', () => () => (
  <div data-testid="nav-dropdown" />
));

describe('Navbar component', () => {
  describe('when logged in', () => {
    it('displays notifications and account menu', () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>,
        { authValues: { isAuthenticated: true }}
      );

      expect(screen.getByTestId('notifications-dropdown')).toBeInTheDocument();
      expect(screen.getByTestId('nav-dropdown')).toBeInTheDocument();
    });
  });

  describe('when not logged in', () => {
    it('renders sign up and log in button', () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>,
        { authValues: { isAuthenticated: false }}
      );

      expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
    });
  });
});
