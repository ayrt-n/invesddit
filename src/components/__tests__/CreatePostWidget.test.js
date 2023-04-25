import React from 'react';
import { render, screen } from '../../utils/test-utils';
import '@testing-library/jest-dom'
import CreatePostWidget from '../CreatePostWidget';
import { MemoryRouter } from 'react-router-dom';

describe('Create Post Widget component', () => {
  describe('renders component', () => {
    it('correctly renders if account context provides user', () => {
      const accountValues = {
        currentAccount: {
          data: { username: 'test', avatar: 'test.jpg' },
          isLoading: false
        }
      };

      render(
        <MemoryRouter>
          <CreatePostWidget />
        </MemoryRouter>,
        {accountValues}
      );

      const userAvatar = screen.getByAltText(/avatar for test/i)
      const userLink = screen.getByRole('link', {name: /test's profile/i})

      expect(userAvatar).toBeInTheDocument();
      expect(userLink).toBeInTheDocument();
    });
  });

  // Add test for loading state
  
});