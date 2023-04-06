import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import CommunityHeader from '../CommunityHeader';
import { joinCommunity, leaveCommunity } from '../../../services/communityService';

jest.mock('../../../services/communityService', () => ({
  joinCommunity: jest.fn(),
  leaveCommunity: jest.fn(),
}));

jest.mock('../../ProtectedButton', () => ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
));

describe('Community Header component', () => {
  describe('renders component', () => {
    it('renders with join button if user has no role', () => {
      render(
        <CommunityHeader
          title="Test title"
          id="TEST"
          role={null}
        />,
        { wrapper: MemoryRouter }
      );

      expect(screen.getByRole('heading', { name: /test title/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: "c/TEST" })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /join/i })).toBeInTheDocument();
    });

    it('renders with joined button if user is member', () => {
      render(
        <CommunityHeader
          role="member"
        />,
        { wrapper: MemoryRouter }
      );

      expect(screen.getByRole('button', { name: /joined/i })).toBeInTheDocument();
    });

    it('renders default avatar if no avatar provided', () => {
      render(
        <CommunityHeader id="TEST" />,
        { wrapper: MemoryRouter }
      );

      const avatar = screen.getByAltText(/community logo for TEST/i)
      expect(avatar).toHaveAttribute('src', 'mock-image');
    });

    it('renders avatar if provided', () => {
      render(
        <CommunityHeader id="TEST" avatar="cool-avatar" />,
        { wrapper: MemoryRouter }
      );

      const avatar = screen.getByAltText(/community logo for TEST/i)
      expect(avatar).toHaveAttribute('src', 'cool-avatar');
    });
  });

  describe('role / membership button', () => {
    describe('when already joined', () => {
      it('changes the text to leave when moused over', async () => {
        const user = userEvent.setup();
        render(<CommunityHeader role="member" />, { wrapper: MemoryRouter });

        const button = screen.getByRole('button', { name: /joined/i });
        await user.hover(button);

        expect(button).toHaveTextContent(/leave/i);
      });

      it('sends request to leave community and updates the role on click', async () => {
        const user = userEvent.setup();
        const mockSetRole = jest.fn();
        leaveCommunity.mockReturnValue(Promise.resolve());

        render(<CommunityHeader id="TEST" setRole={mockSetRole} role="member" />, { wrapper: MemoryRouter });

        const button = screen.getByRole('button', { name: /joined/i });
        await user.click(button);

        await waitFor(() => expect(leaveCommunity).toBeCalledWith("TEST"));
        expect(mockSetRole).toHaveBeenCalledWith(null);
      });
    });

    describe('when not joined', () => {
      it ('sends request to join community and updates the role on click', async () => {
        const user = userEvent.setup();
        const mockSetRole = jest.fn();
        joinCommunity.mockReturnValue(Promise.resolve());

        render(<CommunityHeader id="TEST" setRole={mockSetRole} />, { wrapper: MemoryRouter });

        const button = screen.getByRole('button', { name: /join/i });
        await user.click(button);

        await waitFor(() => expect(joinCommunity).toBeCalledWith("TEST"));
        expect(mockSetRole).toHaveBeenCalledWith("member");
      });
    });
  });
});
