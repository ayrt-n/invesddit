import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../../../utils/test-utils';
import PostContent from '../PostContent';
import { MemoryRouter } from 'react-router-dom';

describe('Post Content component', () => {
  describe('when post status media', () => {
    it('renders media post content', () => {
      const mediaPost = {
        status: 'media',
        id: 1,
        type: "MediaPost",
        title: 'Test Post',
        comments_count: 0,
        created_at: "2023-04-14T13:49:33.617Z",
        score: 1,
        content: "test.jpg",
        vote_status: null,
        account: {
            id: 15,
            username: "Test_user",
            avatar: null,
            created_at: "2023-04-14T13:47:48.760Z"
        }
      };

      render(
        <MemoryRouter>
          <PostContent post={mediaPost} deletePost={jest.fn()} editPost={jest.fn()} />
        </MemoryRouter>
      );

      expect(screen.getByTestId("metaText")).toHaveTextContent(/posted byu\/test_user/i);
      expect(screen.getByRole('heading', {name: /test post/i})).toBeInTheDocument();
      expect(screen.getByAltText(/user post/i)).toHaveAttribute('src', mediaPost.content);
      expect(screen.getByTestId("commentCount")).toHaveTextContent(/0 comments/i);
    });
  });

  describe('when post status link', () => {
    it('renders link post content', () => {
      const linkPost = {
        status: 'link',
        id: 1,
        type: "LinkPost",
        title: 'Test Post',
        comments_count: 0,
        created_at: "2023-04-14T13:49:33.617Z",
        score: 1,
        content: "https://test.com",
        vote_status: null,
        account: {
            id: 15,
            username: "Test_user",
            avatar: null,
            created_at: "2023-04-14T13:47:48.760Z"
        }
      };

      render(
        <MemoryRouter>
          <PostContent post={linkPost} deletePost={jest.fn()} editPost={jest.fn()} />
        </MemoryRouter>
      );

      expect(screen.getByTestId("metaText")).toHaveTextContent(/posted byu\/test_user/i);
      expect(screen.getByRole('heading', {name: /test post/i})).toBeInTheDocument();
      expect(screen.getByText(linkPost.content)).toHaveAttribute('href', linkPost.content);
      expect(screen.getByTestId("commentCount")).toHaveTextContent(/0 comments/i);
    });
  });

  describe('when post status text', () => {
    it('renders text post content', () => {
      const textPost = {
        status: 'text',
        id: 1,
        type: "TextPost",
        title: 'Test Post',
        comments_count: 0,
        created_at: "2023-04-14T13:49:33.617Z",
        score: 1,
        content: "Test text post, say that three times fast",
        vote_status: null,
        account: {
            id: 15,
            username: "Test_user",
            avatar: null,
            created_at: "2023-04-14T13:47:48.760Z"
        }
      };

      render(
        <MemoryRouter>
          <PostContent post={textPost} deletePost={jest.fn()} editPost={jest.fn()} />
        </MemoryRouter>
      );

      expect(screen.getByTestId("metaText")).toHaveTextContent(/posted byu\/test_user/i);
      expect(screen.getByRole('heading', {name: /test post/i})).toBeInTheDocument();
      expect(screen.getByText(textPost.content)).toBeInTheDocument();
      expect(screen.getByTestId("commentCount")).toHaveTextContent(/0 comments/i);
    });
  });

  describe('when post status deleted', () => {
    it('renders text post content', () => {
      const deletedPost = {
        status: 'deleted',
        id: 1,
        type: "TextPost",
        title: 'Test Post',
        comments_count: 0,
        created_at: "2023-04-14T13:49:33.617Z",
        score: 1,
        content: "[Deleted]",
        vote_status: null,
        account: null
      };

      render(
        <MemoryRouter>
          <PostContent post={deletedPost} deletePost={jest.fn()} editPost={jest.fn()} />
        </MemoryRouter>
      );

      expect(screen.getByText("u/[deleted]")).toBeInTheDocument();
      expect(screen.getByRole('heading', {name: /test post/i})).toBeInTheDocument();
      expect(screen.getByText(/this post was deleted by the person who originally posted it./i)).toBeInTheDocument();
      expect(screen.getByTestId("commentCount")).toHaveTextContent(/0 comments/i);
    });
  });
});
