import React from 'react';
import { renderWithMemoryRouter, screen, within } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CommentSection from '../CommentSection';
import { server, rest } from '../../../mocks/server';
import { useEmptyResponse } from '../../../utils/msw-utils';
import { config } from '../../../services/constants';

const API_URL = config.urls.API_URL;

describe('Comment Section component', () => {
  describe('creating new comment', () => {
    it('appends the new comment to comment section', async () => {
      // Set up
      const user = userEvent.setup();
      renderWithMemoryRouter(<CommentSection postId="1" />, {authValues: { isAuthenticated: true }});

      // Type and submit comment
      await user.type(screen.getByPlaceholderText(/What are your thoughts/i), 'Good post!');
      await user.click(screen.getByRole('button', {name: /comment/i}));

      expect(await screen.findByPlaceholderText(/What are your thoughts/i)).toHaveValue('');
      expect(await screen.findByText(/good post/i)).toBeInTheDocument();
    });
  });

  describe('replying to comment', () => {
    it('appends reply to comment', async () => {
      const user = userEvent.setup();
      const reply = {
        "id": 999,
        "post_id": 1,
        "body": "Replying to comment",
        "score": 0,
        "created_at": "2023-03-21T11:40:13.978Z",
        "status": "published",
        "vote_status": null,
        "account": {
            "id": 1,
            "username": "user1",
            "avatar": null,
            "created_at": "2023-03-21T11:40:13.323Z"
        },
        "comments": []
      };

      server.use(
        rest.post(`${API_URL}/api/v1/posts/:post_id/comments`, async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(reply))
        })
      );

      renderWithMemoryRouter(<CommentSection postId="1" />, { authValues: { isAuthenticated: true } });
      const replyButtons = await screen.findAllByRole('button', {name: /reply/i});

      // Click second reply button (nested comment)
      await user.click(replyButtons[1]);

      // Fill out and submit reply
      const replyContainer = screen.getByTestId('replyForm');
      await user.type(within(replyContainer).getByPlaceholderText(/what are your thoughts/i), reply.body);
      await user.click(within(replyContainer).getByRole('button', {name: /reply/i}));

      // Reply is appended to document and reply form is closed
      expect(await screen.findByTestId(`comment${reply.id}`)).toBeInTheDocument();
      expect(screen.queryByTestId('replyForm')).not.toBeInTheDocument();
    });
  });

  describe('when no comments', () => {
    it('renders no comment message', async () => {
      useEmptyResponse(`${API_URL}/api/v1/posts/:post_id/comments`);
      renderWithMemoryRouter(<CommentSection postId="1" />);

      expect(await screen.findByText(/no comments yet/i)).toBeInTheDocument();
    });
  });
});
