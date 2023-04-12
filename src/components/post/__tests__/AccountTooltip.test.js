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
  });
});
