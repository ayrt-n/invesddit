import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import CommunityTooltip from '../CommunityTooltip';

describe('Community Tooltip component', () => {
  describe('renders component', () => {
    it('correctly renders community information', () => {
      const community = {
        avatar: 'fake-avatar.jpg',
        sub_dir: 'TEST',
        memberships_count: 23,
        description: 'Test description'
      };

      const { container } = render(<CommunityTooltip community={community} />, { wrapper: MemoryRouter });

      expect(container).toMatchSnapshot();
    });

    it('does not render description if not provided', () => {
      const community = {
        avatar: 'fake-avatar.jpg',
        sub_dir: 'TEST',
        memberships_count: 23,
        description: null
      };

      render(<CommunityTooltip community={community} />, { wrapper: MemoryRouter });

      expect(screen.queryByTestId('description')).not.toBeInTheDocument();
    });

    it('renders default avatar if no avatar provided', () => {
      const community = {
        avatar: null,
        sub_dir: 'TEST',
        memberships_count: 23,
        description: null
      };

      render(<CommunityTooltip community={community} />, { wrapper: MemoryRouter });

      expect(screen.getByAltText('avatar for c/TEST')).toHaveAttribute('src', 'mock-image');
    });
  });
});
