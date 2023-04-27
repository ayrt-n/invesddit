import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../../../utils/test-utils';
import PostContent from '../PostContent';
import { MemoryRouter } from 'react-router-dom';
import { textPost, linkPost, mediaPost, deletedPost } from '../../../mocks/data/posts';

describe('Post Content component', () => {
  describe('when post status media', () => {
    it('renders media post content', () => {
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
