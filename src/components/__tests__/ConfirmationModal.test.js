import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ConfirmationModal from '../ConfirmationModal';

describe('Confirmation Modal component', () => {
  describe('rendering the component', () => {
    it('correctly renders with header, message, and action text', () => {
      render(
        <ConfirmationModal
          header="Test Confirmation"
          message="Test Message"
          actionText="Test Action"
        />
      );

      const header = screen.getByRole('heading', {name: /test confirmation/i});
      const message = screen.getByText(/test message/i);
      const button = screen.getByRole('button', {name: /test action/i})

      expect(header).toBeInTheDocument();
      expect(message).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe('clicking the cancel button', () => {
    it('runs closeModal callback', async () => {
      const user = userEvent.setup();
      const mockCloseModal = jest.fn();

      render(<ConfirmationModal closeModal={mockCloseModal} />);
      const cancel = screen.getByRole('button', {name: /cancel/i})

      await user.click(cancel)

      expect(mockCloseModal).toHaveBeenCalled();
    });
  });

  describe('clicking the x', () => {
    it('runs closeModal callback', async () => {
      const user = userEvent.setup();
      const mockCloseModal = jest.fn();

      render(<ConfirmationModal closeModal={mockCloseModal} />);
      const cancel = screen.getByRole('button', {name: /close/i})

      await user.click(cancel)

      expect(mockCloseModal).toHaveBeenCalled();
    });
  });

  describe('clicking to confirm the action', () => {
    it('runs callback and then closes the modal', async () => {
      const user = userEvent.setup();
      const mockCloseModal = jest.fn();
      const mockCallback = jest.fn();

      render(
        <ConfirmationModal
          actionText="Confirm"
          callback={mockCallback}
          closeModal={mockCloseModal}
        />
      );

      const confirm = screen.getByRole('button', {name: /confirm/i});
      await user.click(confirm);

      expect(mockCallback).toHaveBeenCalled();
      expect(mockCloseModal).toHaveBeenCalled();
    });
  });
});