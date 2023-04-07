import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccountTooltip from '../AccountTooltip';
import { MemoryRouter } from 'react-router-dom';

// Mocks
jest.mock('date-fns/formatDistanceToNow', () => () => ('Test days'))

describe('Account Tooltip component', () => {
  describe('renders component', () => {
    it('correctly renders account information', () => {
      const account = {
        created_at: null,
        avatar: 'fake-avatar.jpg',
        username: 'Test123',
      };

      const { container } = render(<AccountTooltip account={account} />, { wrapper: MemoryRouter });

      expect(container).toMatchSnapshot();
    });

    it('renders default avatar if account has no avatar', () => {
      const account = {
        created_at: null,
        avatar: null,
        username: 'Test123',
      };

      render(<AccountTooltip account={account} />, { wrapper: MemoryRouter });

      expect(screen.getByAltText(/avatar for test123/i)).toHaveAttribute('src', 'mock-image');
    });
  });
});
