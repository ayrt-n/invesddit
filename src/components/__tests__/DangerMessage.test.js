import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DangerMessage from '../DangerMessage';

describe('Danger Message component', () => {
  describe('renders component', () => {
    it('correctly renders component with header, message, and children', () => {
      render(
        <DangerMessage header="Test header" message="Test message">
          <p>Test that children render</p>
        </DangerMessage>
      );

      const header = screen.getByRole('heading', { name: /test header/i });
      const message = screen.getByText(/test message/i);
      const children = screen.getByText(/test that children render/i);

      expect(header).toBeInTheDocument();
      expect(message).toBeInTheDocument();
      expect(children).toBeInTheDocument();
    });
  });
});
