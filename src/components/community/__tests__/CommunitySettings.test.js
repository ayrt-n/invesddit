import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getCommunity } from '../../../services/communityService';
import CommunitySettings from '../CommunitySettings';
import { MemoryRouter } from 'react-router-dom';

// Mock getCommuntiy using jest.fn
jest.mock('../../../services/communityService', () => ({
  getCommunity: jest.fn(),
}));

// Mock Edit Community Form
jest.mock('../EditCommunityForm', () => ({ community }) => {
  return (
    <div data-testid="edit-form">
      {JSON.stringify(community)}
    </div>
  )
});

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => (<div />),
  useParams: () => ({ community_id: 'TEST' }),
}));

describe('Community Settings component', () => {
  describe('renders component', () => {
    it('uses community_id param to call getCommunity api', async () => {
      // Mock get community api call
      getCommunity.mockReturnValueOnce(Promise.resolve({}));

      // Render Settings page
      render(<CommunitySettings />, { wrapper: MemoryRouter });

      // Assertion
      await waitFor(() => expect(getCommunity).toHaveBeenCalledWith('TEST'));
    });

    it('renders settings page with data', async () => {
      // Mock get community api call
      const apiResponse = {
        data: {
          avatar: 'fake-avatar.jpg',
          banner: 'fake-banner.jpg',
          created_at: '2023-03-21T11:40:13.839Z',
          description: 'Test description',
          memberships_count: 2,
          title: 'Test title',
          current_role: 'tester',
          sub_dir: 'TEST'
        }
      };
      getCommunity.mockReturnValueOnce(Promise.resolve(apiResponse));

      // Render Settings page
      render(<CommunitySettings />, { wrapper: MemoryRouter });

      await waitFor(() => expect(getCommunity).toBeCalled());
      const link = screen.getByRole('link', { name: /c\/test/i });

      expect(screen.getByRole('heading', { name: /mod tools - c\/TEST/i })).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/c/TEST');
      expect(screen.getByTestId('edit-form')).toHaveTextContent(JSON.stringify(apiResponse.data));
    });
  });
});
