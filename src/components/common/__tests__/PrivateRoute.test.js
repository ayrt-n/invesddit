import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrivateRoute from '../PrivateRoute';
import { isLoggedIn } from '../../../services/authService';

// Mock auth service
jest.mock('../../../services/authService', () => ({
  isLoggedIn: jest.fn(),
}));

// Mock navigation component
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    Navigate: () => (<div data-testid='navigate' />)
  }
});

describe('Private Router component', () => {
  it('renders navigate if user not logged in', () => {
    isLoggedIn.mockReturnValueOnce(false);

    render(
      <PrivateRoute>
        <div data-testid="child" />
      </PrivateRoute>
    )

    expect(screen.getByTestId('navigate')).toBeInTheDocument();
  });

  it('renders children if user logged in', () => {
    isLoggedIn.mockReturnValueOnce(true);

    render(
      <PrivateRoute>
        <div data-testid="child" />
      </PrivateRoute>
    )

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});