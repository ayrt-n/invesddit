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
    it('renders with join button if user is not member', () => {
      render(
        <CommunityHeader
          title="Test title"
          id="TEST"
          isMember={false}
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
          isMember={true}
        />,
        { wrapper: MemoryRouter }
      );

      expect(screen.getByRole('button', { name: /joined/i })).toBeInTheDocument();
    });
  });

  describe('role / membership button', () => {
    describe('when already joined', () => {
      it('changes the text to leave when moused over', async () => {
        const user = userEvent.setup();
        render(<CommunityHeader isMember={true} />, { wrapper: MemoryRouter });

        const button = screen.getByRole('button', { name: /joined/i });
        await user.hover(button);

        expect(button).toHaveTextContent(/leave/i);
      });

      it('sends request to leave community and updates membership', async () => {
        const user = userEvent.setup();
        const mockUpdate = jest.fn();
        leaveCommunity.mockReturnValue(Promise.resolve());

        render(<CommunityHeader id="TEST" updateCommunity={mockUpdate} isMember={true} membershipCount={10} />, { wrapper: MemoryRouter });

        const button = screen.getByRole('button', { name: /joined/i });
        await user.click(button);

        await waitFor(() => expect(leaveCommunity).toBeCalledWith("TEST"));
        expect(mockUpdate).toHaveBeenCalledWith({ is_member: false, memberships_count: 9 });
      });
    });

    describe('when not joined', () => {
      it ('sends request to join community and updates membership', async () => {
        const user = userEvent.setup();
        const mockUpdate = jest.fn();
        joinCommunity.mockReturnValue(Promise.resolve());

        render(<CommunityHeader id="TEST" updateCommunity={mockUpdate} membershipCount={10} />, { wrapper: MemoryRouter });

        const button = screen.getByRole('button', { name: /join/i });
        await user.click(button);

        await waitFor(() => expect(joinCommunity).toBeCalledWith("TEST"));
        expect(mockUpdate).toHaveBeenCalledWith({ is_member: true, memberships_count: 10 + 1 });
      });
    });
  });
});
