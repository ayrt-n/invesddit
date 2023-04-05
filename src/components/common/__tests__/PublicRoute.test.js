import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PublicRoute from '../PublicRoute';
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

describe('Public Router component', () => {
  it('renders children if user not logged in', () => {
    isLoggedIn.mockReturnValueOnce(false);

    render(
      <PublicRoute>
        <div data-testid="child" />
      </PublicRoute>
    )

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders navigate if user logged in', () => {
    isLoggedIn.mockReturnValueOnce(true);

    render(
      <PublicRoute>
        <div data-testid="child" />
      </PublicRoute>
    )

    expect(screen.getByTestId('navigate')).toBeInTheDocument();
  });
});