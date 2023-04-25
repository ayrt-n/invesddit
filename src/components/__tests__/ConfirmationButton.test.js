import React from 'react';
import { render, screen } from '../../utils/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ConfirmationButton from '../ConfirmationButton';
import ConfirmationModal from '../ConfirmationModal';

describe('Confirmation Button component', () => {
  describe('renders component', () => {
    it('renders button with attributes / props', () => {
      render(
        <ConfirmationButton onClick="test" className="test">
          Test
        </ConfirmationButton>
      );
      
      const button = screen.getByRole('button', { name: /test/i });
      
      expect(button).toHaveClass('test');
      expect(button).toHaveTextContent('Test');
    });
  })

  describe('clicking button', () => {
    it('calls openModal with confirmation modal props', async () => {
      const mockOpenModal = jest.fn();
      const user = userEvent.setup();

      render(
        <ConfirmationButton
          modalHeader="Test header"
          modalMessage="Test message"
          modalActionText="Test action"
          onClick="Test callback"
        >
          Test
        </ConfirmationButton>,
        {modalValues: { openModal: mockOpenModal, closeModal: "Test close" }}
      );
      
      const button = screen.getByRole('button', { name: /test/i });
      await user.click(button);

      expect(mockOpenModal).toHaveBeenCalledWith(
        <ConfirmationModal
          header="Test header"
          message="Test message"
          actionText="Test action"
          callback="Test callback"
          closeModal="Test close"
        />
      );
    });
  });
});
