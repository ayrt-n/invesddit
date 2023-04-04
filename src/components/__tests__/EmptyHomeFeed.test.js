import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmptyHomeFeed from '../EmptyHomeFeed';
import { MemoryRouter } from 'react-router-dom';

// Mock Empty Feed component
jest.mock('../EmptyFeed', () => ({ children }) => (
  <>
    {children}
  </>
));

describe('Empty Home Feed component', () => {
  describe('renders component', () => {
    it('correctly renders component', () => {
      render(<EmptyHomeFeed />, { wrapper: MemoryRouter });

      const message = screen.getByText(/Invesddit gets better when you join communities. Explore all posts and find some that you love!/i);
      const button = screen.getByRole('link', { name: /browse popular posts/i });

      expect(message).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(button.href).toContain('http://localhost/?filter=all');
    });
  });
});
