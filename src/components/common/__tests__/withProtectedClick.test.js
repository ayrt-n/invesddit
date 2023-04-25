import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import withProtectedClick from '../withProtectedClick';
import OnboardModal from '../../OnboardModal';

describe('withProtectedClick HoC', () => {
  describe('when user is not logged in', () => {
    it('opens modal with the specified call to action', async () => {
      // Set up
      const user = userEvent.setup();
      const TestButton = withProtectedClick('button')
      const mockOpenModal = jest.fn();

      // Render test button with protected click
      render(
        <TestButton callToAction="Test CTA">
          Test
        </TestButton>,
        {
          modalValues: { openModal: mockOpenModal, closeModal: null },
          authValues: { isAuthenticated: false }
        }
      );

      await user.click(screen.getByRole('button', { name: /test/i }));

      expect(mockOpenModal).toHaveBeenCalledTimes(1);
      expect(mockOpenModal).toHaveBeenCalledWith(
        <OnboardModal callToAction="Test CTA" closeModal={null} />
      );
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
        {
          modalValues: { openModal: jest.fn(), closeModal: null },
          authValues: { isAuthenticated: false }
        }
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
      const mockOpenModal = jest.fn();

      // Render test button with protected click
      render(
        <TestButton>
          Test
        </TestButton>,
        {
          modalValues: { openModal: mockOpenModal, closeModal: null },
          authValues: { isAuthenticated: true }
        }
      );

      await user.click(screen.getByRole('button', { name: /test/i }));

      expect(mockOpenModal).not.toHaveBeenCalled();
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
        {
          modalValues: { openModal: jest.fn(), closeModal: null },
          authValues: { isAuthenticated: true }
        }
      );

      await user.click(screen.getByRole('button', { name: /test/i }));

      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });
});
