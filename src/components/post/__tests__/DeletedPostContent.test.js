import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeletedPostContent from '../DeletedPostContent';

jest.mock('../PostActions', () => ({ commentCount }) => (
  <div data-testid="comments">{commentCount}</div>
));

describe('Deleted Post Content component', () => {
  describe('renders component', () => {
    it('uses post data to render deleted post content correctly', () => {
      const post = {
        title: 'Test title',
        comments_count: 12,
        created_at: "2023-04-08T15:11:02.831Z",
      };

      render(<DeletedPostContent post={post} />);

      expect(screen.getByRole('heading', { name: /test title/i })).toBeInTheDocument();
      expect(screen.getByTestId('comments')).toHaveTextContent(post.comments_count);
    });
  });
});
