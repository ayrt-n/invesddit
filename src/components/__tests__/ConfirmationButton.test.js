import React from 'react';
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ModalContext from '../../contexts/modal/ModalContext';
import ConfirmationButton from '../ConfirmationButton';
import ConfirmationModal from '../ConfirmationModal';

const customRender = (childComponent, {providerProps, ...renderOptions}) => {
  return render(
    <ModalContext.Provider {...providerProps}>
      {childComponent}
    </ModalContext.Provider>,
    renderOptions
  );
};

describe('Confirmation Button component', () => {
  describe('renders component', () => {
    it('renders button with attributes / props', () => {
      const providerProps = {
        value: { openModal: null, closeModal: null }
      };

      customRender(
        <ConfirmationButton
          onClick="test"
          className="test"
        >
          Test
        </ConfirmationButton>,
        { providerProps }
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

      const providerProps = {
        value: { openModal: mockOpenModal, closeModal: "Test close" }
      };

      customRender(
        <ConfirmationButton
          modalHeader="Test header"
          modalMessage="Test message"
          modalActionText="Test action"
          onClick="Test callback"
        >
          Test
        </ConfirmationButton>,
        { providerProps }
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
