import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '../Profile';

// Mocks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    username: 'test_user',
  }),
}));

jest.mock('../ProfileWidget', () => ({ username }) => (
  <div data-testid='widget'>
    {username}
  </div>
));

jest.mock('../../feed/Feed', () => ({ subdir }) => (
    <div data-testid="feed">
      {subdir}
    </div>
));

jest.mock('../../feed/FeedController', () => () => (
  <div />
))

// Profile Test
describe('Profile component', () => {
  describe('renders component', () => {
    it('correctly renders component for user based on search params', () => {
      render(<Profile />)

      expect(screen.getByTestId('widget')).toHaveTextContent('test_user');
      expect(screen.getByTestId('feed')).toHaveTextContent('api/v1/accounts/test_user/posts');
    });
  });
});
