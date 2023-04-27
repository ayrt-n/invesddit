import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Post from '../Post';
import { server, rest } from '../../../mocks/server';
import { MemoryRouter } from 'react-router-dom';
import { config } from '../../../services/constants';
import { textPost, linkPost, mediaPost } from '../../../mocks/data/posts';

const API_URL = config.urls.API_URL;

// Mock comment section
jest.mock('../../comments/CommentSection', () => () => (
  <div />
));

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => (<div data-testid='navigate' />),
  useParams: () => ({ post_id: 'TEST' }),
}));

describe('Post component', () => {
  describe('voting on post', () => {
    it('updates vote count as user votes', async () => {
      const user = userEvent.setup();
      server.use(
        rest.get(`${API_URL}/api/v1/posts/:post_id`, async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json({data: textPost}))
        })
      );

      render(
        <MemoryRouter>
          <Post />
        </MemoryRouter>,
        {authValues: { isAuthenticated: true }}
      );

      const upvote = await screen.findByRole('button', {name: /upvote/i});
      const downvote = await screen.findByRole('button', {name: /downvote/i});

      expect(await screen.findByTestId('score')).toHaveTextContent(textPost.score);

      await user.click(upvote);
      expect(await screen.findByTestId('score')).toHaveTextContent(textPost.score + 1);

      await user.click(downvote);
      expect(await screen.findByTestId('score')).toHaveTextContent(textPost.score - 1);

      await user.click(downvote);
      expect(await screen.findByTestId('score')).toHaveTextContent(textPost.score);
    });
  });

  describe('editing post', () => {
    it('does not show option to edit on media posts', async () => {
      const user = userEvent.setup();
      server.use(
        rest.get(`${API_URL}/api/v1/posts/:post_id`, async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json({data: mediaPost}))
        })
      );

      render(
        <MemoryRouter>
          <Post />
        </MemoryRouter>,
        {
          authValues: {isAuthenticated: true},
          accountValues: {currentAccount: {data: {id: mediaPost.account.id}}}
        }
      );

      const postOptions = await screen.findByRole('button', {name: /post options/i});
      await user.click(postOptions);

      expect(screen.getByRole('button', {name: /delete/i})).toBeInTheDocument();
      expect(screen.queryByRole('button', {name: /edit/i})).not.toBeInTheDocument();
    });

    it('does not show option to edit on link posts', async () => {
      const user = userEvent.setup();
      server.use(
        rest.get(`${API_URL}/api/v1/posts/:post_id`, async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json({data: linkPost}))
        })
      );

      render(
        <MemoryRouter>
          <Post />
        </MemoryRouter>,
        {
          authValues: {isAuthenticated: true},
          accountValues: {currentAccount: {data: {id: linkPost.account.id}}}
        }
      );

      const postOptions = await screen.findByRole('button', {name: /post options/i});
      await user.click(postOptions);

      expect(screen.getByRole('button', {name: /delete/i})).toBeInTheDocument();
      expect(screen.queryByRole('button', {name: /edit/i})).not.toBeInTheDocument();
    });

    it('allows editing of text posts and updates on submit', async () => {
      const user = userEvent.setup();
      server.use(
        rest.get(`${API_URL}/api/v1/posts/:post_id`, async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json({data: textPost}))
        }),
        rest.patch(`${API_URL}/api/v1/posts/:post_id`, async (req, res, ctx) => {
          return res(ctx.status(204))
        })
      );

      render(
        <MemoryRouter>
          <Post />
        </MemoryRouter>,
        {
          authValues: {isAuthenticated: true},
          accountValues: {currentAccount: {data: {id: textPost.account.id}}}
        }
      );

      // Open up edit form, make change, and submit
      const postOptions = await screen.findByRole('button', {name: /post options/i});
      await user.click(postOptions);
      await user.click(screen.getByRole('button', {name: /edit/i}));
      await user.type(screen.getByRole('textbox'), ' This is a test edit!');
      await user.click(screen.getByRole('button', {name: /save/i}));

      expect(await screen.findByTestId('textPostContent')).toHaveTextContent('Test post! This is a test edit!');
    });
  });
});
