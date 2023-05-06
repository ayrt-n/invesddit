import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import withProtectedClick from '../withProtectedClick';

jest.mock('../../AuthenticationModal.js', () => ({ callToAction }) => (
  <h1>{callToAction}</h1>
));

describe('withProtectedClick HoC', () => {
  describe('when user is not logged in', () => {
    it('opens modal with the specified call to action', async () => {
      // Set up
      const user = userEvent.setup();
      const TestButton = withProtectedClick('button')

      // Render test button with protected click
      render(
        <TestButton callToAction="Test CTA">
          Test
        </TestButton>,
        {authValues: { isAuthenticated: false }}
      );

      await user.click(screen.getByRole('button', { name: /test/i }));

      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByRole('heading', /test CTA/i)).toBeInTheDocument();
    });

    it('does not call onClick method', async () => {
      // Set up
      const user = userEvent.setup();
      const TestButton = withProtectedClick('button')
      const mockClick = jest.fn();

      // Render test button with protected click
      render(
        <TestButton onClick={mockClick}>
          Test
        </TestButton>,
        {authValues: { isAuthenticated: false }}
      );

      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(mockClick).not.toHaveBeenCalled();
    });
  });

  describe('when user is logged in', () => {
    it('does not open modal', async () => {
      // Set up
      const user = userEvent.setup();
      const TestButton = withProtectedClick('button')

      // Render test button with protected click
      render(
        <TestButton>
          Test
        </TestButton>,
        {authValues: { isAuthenticated: true }}
      );

      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByRole('heading', /test CTA/i)).not.toBeInTheDocument();
    });

    it('calls onClick method', async () => {
      // Set up
      const user = userEvent.setup();
      const TestButton = withProtectedClick('button')
      const mockClick = jest.fn();

      // Render test button with protected click
      render(
        <TestButton onClick={mockClick}>
          Test
        </TestButton>,
        {authValues: { isAuthenticated: true }}
      );

      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });
});
