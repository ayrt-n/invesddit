import React from 'react';
import { screen, render } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import PrivateRoute from '../PrivateRoute';

// Mock navigation component
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    Navigate: () => (<div data-testid='navigate' />)
  }
});

describe('Private Router component', () => {
  it('renders navigate if user not logged in', () => {

    render(
      <PrivateRoute>
        <div data-testid="child" />
      </PrivateRoute>,
      { authValues: { isAuthenticated: false } }
    );

    expect(screen.getByTestId('navigate')).toBeInTheDocument();
    expect(screen.queryByTestId('child')).not.toBeInTheDocument();
  });

  it('renders children if user logged in', () => {

    render(
      <PrivateRoute>
        <div data-testid="child" />
      </PrivateRoute>,
      { authValues: { isAuthenticated: true } }
    )

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.queryByTestId('navigate')).not.toBeInTheDocument();
  });
});