import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Dropdown from '../Dropdown';

describe('Dropdown component', () => {
  describe('renders component', () => {
    it('renders with dropdown prompt and dropdown closed by default', () => {
      render(
        <Dropdown dropdownPrompt="Test Dropdown">
          <div data-testid="dropdown-item">Inside the dropdown!</div>
        </Dropdown>
      );

      expect(screen.getByRole('button', { name: /test dropdown/i })).toBeInTheDocument();
      expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
    });
  });
  
  describe('interacting with dropdown', () => {
    it('toggles dropdown when button is clicked', async () => {
      const user = userEvent.setup();

      render(
        <Dropdown dropdownPrompt="Test Dropdown">
          <div data-testid="dropdown-item">Inside the dropdown!</div>
          <div data-testid="dropdown-item">Inside the dropdown!</div>
          <div data-testid="dropdown-item">Inside the dropdown!</div>
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: /test dropdown/i });
      await user.click(button);

      expect(screen.getAllByTestId('dropdown-item').length).toBe(3);

      await user.click(button);

      expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
    });

    it('closes the dropdown if user clicks outside of dropdown', async () => {
      const user = userEvent.setup();

      render(
        <>
          <Dropdown dropdownPrompt="Test Dropdown">
            <div data-testid="dropdown-item">Inside the dropdown!</div>
            <div data-testid="dropdown-item">Inside the dropdown!</div>
            <div data-testid="dropdown-item">Inside the dropdown!</div>
          </Dropdown>
          <div data-testid="outside">I am outside the dropdown!</div>
        </>
      );

      const button = screen.getByRole('button', { name: /test dropdown/i });
      const outsideDropdown = screen.getByTestId('outside');
      await user.click(button);
      await user.click(outsideDropdown);

      expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
    });
  });
});
