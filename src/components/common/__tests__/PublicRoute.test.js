import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import PublicRoute from '../PublicRoute';

// Mock navigation component
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    Navigate: () => (<div data-testid='navigate' />)
  }
});

describe('Public Router component', () => {
  it('renders children if user not logged in', () => {
    render(
      <PublicRoute>
        <div data-testid="child" />
      </PublicRoute>,
      {authValues: { isAuthenticated: false }}
    )

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders navigate if user logged in', () => {
    render(
      <PublicRoute>
        <div data-testid="child" />
      </PublicRoute>,
      {authValues: { isAuthenticated: true }}
    )

    expect(screen.getByTestId('navigate')).toBeInTheDocument();
  });
});