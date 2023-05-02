import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NotificationListItem from '../NotificationListItem';
import { MemoryRouter } from 'react-router-dom';

// Test notification to pass as prop
const readNotification = {
  id: 1,
  message: "u/test replied to your post in c/TEST",
  read: true,
  details: {
      id: 1,
      post_id: 1,
      body: "Test!!!",
      username: "test",
      avatar: "fake-avatar.jpg",
      community: "TEST"
  },
  created_at: "2023-03-22T12:15:57.149Z"
};

// Test notification to pass as prop
const unreadNotification = {
  id: 2,
  message: "u/test replied to your post in c/TEST",
  read: false,
  details: {
      id: 2,
      post_id: 2,
      body: "Test!!!",
      username: "test",
      avatar: "fake-avatar.jpg",
      community: "TEST"
  },
  created_at: "2023-03-22T12:15:57.149Z"
};

describe('Notification List Item component', () => {
  describe('renders component', () => {
    it('renders notification correctly', () => {
      render(
        <MemoryRouter>
          <NotificationListItem notification={readNotification} />
        </MemoryRouter>
      );
  
      expect(screen.getByRole('link')).toHaveAttribute(
        'href', `/c/${readNotification.details.community}/posts/${readNotification.details.post_id}`
      );
      expect(screen.getByAltText('notification avatar')).toHaveAttribute('src', readNotification.details.avatar);
      expect(screen.getByText(readNotification.message)).toBeInTheDocument();
      expect(screen.getByText(readNotification.details.body)).toBeInTheDocument();
    });

    it('renders with blue background if notification is unread', () => {  
      render(
        <MemoryRouter>
          <NotificationListItem notification={readNotification} />
          <NotificationListItem notification={unreadNotification} />
        </MemoryRouter>
      );

      const notifications = screen.getAllByTestId('notification');

      expect(notifications[0]).not.toHaveClass('bg-blue-highlight');
      expect(notifications[1]).toHaveClass('bg-blue-highlight');
    });

    it('renders bottom border if specified', () => {
      render(
        <MemoryRouter>
          <NotificationListItem notification={readNotification} />
          <NotificationListItem underlined notification={readNotification} />
        </MemoryRouter>,
      );

      const notifications = screen.getAllByTestId('notification');

      expect(notifications[0]).not.toHaveClass('border-b-[1px]', 'border-nav-border', 'last:border-b-0');
      expect(notifications[1]).toHaveClass('border-b-[1px]', 'border-nav-border', 'last:border-b-0');
    });

    describe('interacting with notification', () => {
      it('calls readNotification and setCurrentAccount if clicked and unread', async () => {
        const user = userEvent.setup();

        const mockSetAccount = jest.fn();
        const accountValues = {
          setCurrentAccount: mockSetAccount,
          currentAccount: {
            data: {
              username: 'Test',
              notifications: 8
            },
            isLoading: false
          }
        };
    
        render(
          <MemoryRouter>
            <NotificationListItem notification={unreadNotification} />
          </MemoryRouter>,
          { accountValues }
        );

        const notificationLink = screen.getByRole('link');
        await user.click(notificationLink);

        expect(mockSetAccount).toHaveBeenCalled();
      });

      it('does not call readNotification and setCurrentAccount if clicked and read', async () => {
        const user = userEvent.setup();

        const mockSetAccount = jest.fn();
        const accountValues = {
          setCurrentAccount: mockSetAccount,
          currentAccount: {
            data: {
              username: 'Test',
              notifications: 8
            },
            isLoading: false
          }
        };
    
        render(
          <MemoryRouter>
            <NotificationListItem notification={readNotification} />
          </MemoryRouter>,
          { accountValues }
        );

        const notificationLink = screen.getByRole('link');
        await user.click(notificationLink);

        expect(mockSetAccount).not.toHaveBeenCalled();
      });
    });
  });
});
