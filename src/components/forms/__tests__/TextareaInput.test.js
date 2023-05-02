import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import TextareaInput from '../TextareaInput';

describe('Text Input component', () => {
  describe('with show length enabled', () => {
    it('renders the remaining characters based on value/max length', () => {
      render(<TextareaInput showLength value="123456" maxLength="30" />)
      
      expect(screen.getByTestId('remainingCharacters')).toHaveTextContent(/24 characters remaining/i)
    });

    it('renders the remaining characters if value is blank', () => {
      render(<TextareaInput showLength value="" maxLength="30" />)
      
      expect(screen.getByTestId('remainingCharacters')).toHaveTextContent(/30 characters remaining/i)
    });
  });

  describe('with show length disabled', () => {
    it('does not render show length component', () => {
      render(<TextareaInput value="123456" maxLength="30" />)
      
      expect(screen.queryByTestId('remainingCharacters')).not.toBeInTheDocument();
    });
  });
});
