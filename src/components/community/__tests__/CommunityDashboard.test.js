import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommunityDashboard from '../CommunityDashboard';
import { MemoryRouter } from 'react-router-dom';

// Mock complicated components
jest.mock('../CommunityHeader', () => ({ title, id, isMember, avatar, banner, updateCommunity }) => {
  return (
    <div>
      <div data-testid="title">{title}</div>
      <div data-testid="id">{id}</div>
      <div data-testid="isMember">{isMember}</div>
      <img src={avatar} alt="test avatar" />
      <img src={banner} alt="test banner" />
      <button onClick={() => updateCommunity('updated')}>Change role</button>
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

// Mock useFetch hook
const communityMock = {data: null, isLoading: false, error: null}
jest.mock('../../../hooks/useFetch', () => () => (
  [communityMock]
));

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => (<div />),
  useParams: () => ({ community_id: 'TEST' }),
}));

describe('Community Dashboard component', () => {
  describe('when user is admin', () => {
    it ('renders admin specific components', async () => {
      // Mock API response and set up
      const apiResponse = {
        avatar: 'fake-avatar.jpg',
        banner: 'fake-banner.jpg',
        created_at: '2023-03-21T11:40:13.839Z',
        description: 'Test description',
        memberships_count: 2,
        title: 'Test title',
        is_admin: true
      };
      communityMock.data = apiResponse;

      // Render component
      render(<CommunityDashboard />, { wrapper: MemoryRouter });

      // Wait for API call and make assertions
      expect(screen.getByRole('link', { name: /mod tools/i })).toBeInTheDocument();
    });
  });

  describe('when user is not admin', () => {
    it('correctly renders components using api response', async () => {
      // Mock API response and set up
      const apiResponse = {
        avatar: 'fake-avatar.jpg',
        banner: 'fake-banner.jpg',
        created_at: '2023-03-21T11:40:13.839Z',
        description: 'Test description',
        memberships_count: 2,
        title: 'Test title',
        is_member: 'true',
      };
      communityMock.data = apiResponse;

      // Render component
      render(<CommunityDashboard />, { wrapper: MemoryRouter });

      // Wait for API call and make assertions
      expect(screen.getByTestId('id')).toHaveTextContent('TEST');
      expect(screen.getByTestId('title')).toHaveTextContent(apiResponse.title);
      expect(screen.getByTestId('isMember')).toHaveTextContent(apiResponse.is_member);
      expect(screen.getByTestId('description')).toHaveTextContent(apiResponse.description);
      expect(screen.getByTestId('createdAt')).toHaveTextContent(apiResponse.created_at);
      expect(screen.getByTestId('membershipCount')).toHaveTextContent(apiResponse.memberships_count);
      expect(screen.getByAltText('test avatar')).toHaveAttribute('src', apiResponse.avatar);
      expect(screen.getByAltText('test banner')).toHaveAttribute('src', apiResponse.banner);
      expect(screen.queryByRole('link', { name: /mod tools/i })).not.toBeInTheDocument();
    });
  });
});
