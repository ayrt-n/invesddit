import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NotificationListItem from '../NotificationListItem';
import { MemoryRouter } from 'react-router-dom';

// Test notification to pass as prop
const readCommentNotification = {
  id: 1,
  read: true,
  details: {
      id: 1,
      post_id: 1,
      body: "Test!!!",
      username: "test",
      avatar: "fake-avatar.jpg",
      community: "TEST"
  },
  category: "comment",
  created_at: "2023-03-22T12:15:57.149Z"
};

// Test notification to pass as prop
const unreadReplyNotification = {
  id: 2,
  read: false,
  details: {
      id: 2,
      post_id: 2,
      body: "Test!!!",
      username: "test",
      avatar: "fake-avatar.jpg",
      community: "TEST"
  },
  category: "reply",
  created_at: "2023-03-22T12:15:57.149Z"
};

describe('Notification List Item component', () => {
  describe('renders component', () => {
    it('renders notification correctly', () => {
      render(
        <MemoryRouter>
          <NotificationListItem notification={readCommentNotification} />
        </MemoryRouter>
      );

      const expectedMessage = `u/${readCommentNotification.details.username} replied to your post in c/${readCommentNotification.details.community}`
  
      expect(screen.getByRole('link')).toHaveAttribute(
        'href', `/c/${readCommentNotification.details.community}/posts/${readCommentNotification.details.post_id}`
      );
      expect(screen.getByAltText('notification avatar')).toHaveAttribute('src', readCommentNotification.details.avatar);
      expect(screen.getByText(expectedMessage)).toBeInTheDocument();
      expect(screen.getByText(readCommentNotification.details.body)).toBeInTheDocument();
    });

    it('renders with blue background if notification is unread', () => {  
      render(
        <MemoryRouter>
          <NotificationListItem notification={readCommentNotification} />
          <NotificationListItem notification={unreadReplyNotification} />
        </MemoryRouter>
      );

      const notifications = screen.getAllByTestId('notification');

      expect(notifications[0]).not.toHaveClass('bg-blue-highlight');
      expect(notifications[1]).toHaveClass('bg-blue-highlight');
    });

    it('renders bottom border if specified', () => {
      render(
        <MemoryRouter>
          <NotificationListItem notification={readCommentNotification} />
          <NotificationListItem underlined notification={readCommentNotification} />
        </MemoryRouter>,
      );

      const notifications = screen.getAllByTestId('notification');

      expect(notifications[0]).not.toHaveClass('border-b-[1px]', 'border-nav-border', 'last:border-b-0');
      expect(notifications[1]).toHaveClass('border-b-[1px]', 'border-nav-border', 'last:border-b-0');
    });

    describe('interacting with notification', () => {
      it('calls readCommentNotification and setCurrentAccount if clicked and unread', async () => {
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
            <NotificationListItem notification={unreadReplyNotification} />
          </MemoryRouter>,
          { accountValues }
        );

        const notificationLink = screen.getByRole('link');
        await user.click(notificationLink);

        expect(mockSetAccount).toHaveBeenCalled();
      });

      it('does not call readCommentNotification and setCurrentAccount if clicked and read', async () => {
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
            <NotificationListItem notification={readCommentNotification} />
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
