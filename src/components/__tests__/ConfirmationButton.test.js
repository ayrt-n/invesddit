import React from 'react';
import { render, screen } from '../../utils/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ConfirmationButton from '../ConfirmationButton';

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
    it('does not call onclick until confirmed in modal', async () => {
      const mockCallback = jest.fn();
      const user = userEvent.setup();

      render(
        <ConfirmationButton
          modalHeader="Test header"
          modalMessage="Test message"
          modalActionText="Confirm test"
          onClick={mockCallback}
        >
          Test
        </ConfirmationButton>
      );
      
      await user.click(screen.getByRole('button', { name: /test/i }));
      expect(mockCallback).not.toHaveBeenCalled();

      await user.click(screen.getByRole('button', { name: /confirm test/i }));
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });
});
