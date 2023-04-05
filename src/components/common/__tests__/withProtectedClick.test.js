import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { isLoggedIn } from '../../../services/authService';
import ModalContext from '../../../contexts/modal/ModalContext';
import withProtectedClick from '../withProtectedClick';
import OnboardModal from '../../OnboardModal';

// Mock auth service
jest.mock('../../../services/authService', () => ({
  isLoggedIn: jest.fn(),
}));

// Custom render with Modal Context
const customRender = (childComponent, {providerProps, ...renderOptions}) => {
  return render(
    <ModalContext.Provider {...providerProps}>
      {childComponent}
    </ModalContext.Provider>,
    renderOptions
  );
};

describe('withProtectedClick HoC', () => {
  describe('when user is not logged in', () => {
    it('opens modal with the specified call to action', async () => {
      // Set up
      const user = userEvent.setup();
      isLoggedIn.mockReturnValueOnce(false);
      const TestButton = withProtectedClick('button')
      const mockOpenModal = jest.fn();
      const providerProps = {
        value: { openModal: mockOpenModal, closeModal: null }
      };

      // Render test button with protected click
      customRender(
        <TestButton callToAction="Test CTA">
          Test
        </TestButton>,
        {providerProps}
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
      isLoggedIn.mockReturnValueOnce(false);
      const TestButton = withProtectedClick('button')
      const mockClick = jest.fn();
      const providerProps = {
        value: { openModal: jest.fn(), closeModal: null }
      };

      // Render test button with protected click
      customRender(
        <TestButton onClick={mockClick}>
          Test
        </TestButton>,
        {providerProps}
      );

      await user.click(screen.getByRole('button', { name: /test/i }));

      expect(mockClick).not.toHaveBeenCalled();
    });
  });

  describe('when user is logged in', () => {
    it('does not open modal', async () => {
      // Set up
      const user = userEvent.setup();
      isLoggedIn.mockReturnValueOnce(true);
      const TestButton = withProtectedClick('button')
      const mockOpenModal = jest.fn();
      const providerProps = {
        value: { openModal: mockOpenModal, closeModal: null }
      };

      // Render test button with protected click
      customRender(
        <TestButton>
          Test
        </TestButton>,
        {providerProps}
      );

      await user.click(screen.getByRole('button', { name: /test/i }));

      expect(mockOpenModal).not.toHaveBeenCalled();
    });

    it('does not call onClick method', async () => {
      // Set up
      const user = userEvent.setup();
      isLoggedIn.mockReturnValueOnce(true);
      const TestButton = withProtectedClick('button')
      const mockClick = jest.fn();
      const providerProps = {
        value: { openModal: jest.fn(), closeModal: null }
      };

      // Render test button with protected click
      customRender(
        <TestButton onClick={mockClick}>
          Test
        </TestButton>,
        {providerProps}
      );

      await user.click(screen.getByRole('button', { name: /test/i }));

      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });
});
