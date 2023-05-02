import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import TextInput from '../TextInput';

describe('Text Input component', () => {
  describe('with show length enabled', () => {
    it('renders the length of the value prop supplied', () => {
      render(<TextInput showLength value="123456" maxLength="300" />)
      
      expect(screen.getByTestId('showLength')).toHaveTextContent("6/300")
    });
  });

  describe('with show length disabled', () => {
    it('does not render show length component', () => {
      render(<TextInput value="123456" maxLength="300" />)
      
      expect(screen.queryByTestId('showLength')).not.toBeInTheDocument();
    });
  });
});
