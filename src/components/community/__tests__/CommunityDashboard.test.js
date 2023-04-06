import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommunityDashboard from '../CommunityDashboard';
import { MemoryRouter } from 'react-router-dom';
import { getCommunity } from '../../../services/communityService';

// Mock complicated components
jest.mock('../CommunityHeader', () => ({ title, id, role, avatar, banner, setRole }) => {
  return (
    <div>
      <div data-testid="title">{title}</div>
      <div data-testid="id">{id}</div>
      <div data-testid="role">{role}</div>
      <img src={avatar} alt="test avatar" />
      <img src={banner} alt="test banner" />
      <button onClick={() => setRole('new role')}>Change role</button>
    </div>
  );
});

jest.mock('../AboutCommunityWidget', () => ({ description, createdAt, membershipCount }) => {
  return (
    <div>
      <div data-testid="description">{description}</div>
      <div data-testid="createdAt">{createdAt}</div>
      <div data-testid="membershipCount">{membershipCount}</div>
    </div>
  );
});

// Mock getCommuntiy using jest.fn
jest.mock('../../../services/communityService', () => ({
  getCommunity: jest.fn(),
}));

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => (<div />),
  useParams: () => ({ community_id: 'TEST' }),
}));

describe('Community Dashboard component', () => {
  describe('when user is not admin', () => {
    it('correctly renders components using api response', async () => {
      // Mock API response and set up
      const apiResponse = {
        data: {
          avatar: 'fake-avatar.jpg',
          banner: 'fake-banner.jpg',
          created_at: '2023-03-21T11:40:13.839Z',
          description: 'Test description',
          memberships_count: 2,
          title: 'Test title',
          current_role: 'tester'
        }
      };
      getCommunity.mockReturnValueOnce(new Promise((resolve, _reject) => {
        resolve(apiResponse);
      }));

      // Render component
      render(<CommunityDashboard />, { wrapper: MemoryRouter });

      // Wait for API call and make assertions
      await waitFor(() => expect(getCommunity).toBeCalled());
      expect(screen.getByTestId('id')).toHaveTextContent('TEST');
      expect(screen.getByTestId('title')).toHaveTextContent(apiResponse.data.title);
      expect(screen.getByTestId('role')).toHaveTextContent(apiResponse.data.current_role);
      expect(screen.getByTestId('description')).toHaveTextContent(apiResponse.data.description);
      expect(screen.getByTestId('createdAt')).toHaveTextContent(apiResponse.data.created_at);
      expect(screen.getByTestId('membershipCount')).toHaveTextContent(apiResponse.data.memberships_count);
      expect(screen.getByAltText('test avatar')).toHaveAttribute('src', apiResponse.data.avatar);
      expect(screen.getByAltText('test banner')).toHaveAttribute('src', apiResponse.data.banner);
      expect(screen.queryByRole('link', { name: /mod tools/i })).not.toBeInTheDocument();
    });
  });

  describe('when user is admin', () => {
    it ('renders admin specific components', async () => {
      // Mock API response and set up
      const apiResponse = {
        data: {
          avatar: 'fake-avatar.jpg',
          banner: 'fake-banner.jpg',
          created_at: '2023-03-21T11:40:13.839Z',
          description: 'Test description',
          memberships_count: 2,
          title: 'Test title',
          current_role: 'admin' // USER SET TO ADMIN HERE!
        }
      };
      getCommunity.mockReturnValueOnce(new Promise((resolve, _reject) => {
        resolve(apiResponse);
      }));

      // Render component
      render(<CommunityDashboard />, { wrapper: MemoryRouter });

      // Wait for API call and make assertions
      await waitFor(() => expect(getCommunity).toBeCalled());
      expect(screen.getByRole('link', { name: /mod tools/i })).toBeInTheDocument();
    });
  });
});
