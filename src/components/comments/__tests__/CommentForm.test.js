import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ModalProvider from '../../../contexts/modal/ModalProvider';
import CommentForm from '../CommentForm';

// Mock API call
jest.mock('../../../services/commentService', () => ({
  createComment: jest.fn(),
}));

// Mock auth service
jest.mock('../../../services/authService', () => ({
  isLoggedIn: jest.fn(),
}));

// Custom render with Modal Context
const customRender = (childComponent, renderOptions) => {
  return render(
    <ModalProvider>
      {childComponent}
    </ModalProvider>,
    renderOptions
  );
};

// Comment form is blank after successful submit

describe('Comment Form component', () => {
  describe('renders component', () => {
    it('renders Reply button if commentId provided', () => {
      customRender(<CommentForm postId="1" commentId="1" />);

      expect(screen.getByRole('button', { name: /reply/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /comment/i })).not.toBeInTheDocument();
    });

    it ('renders Comment button if no commentId provided', () => {
      customRender(<CommentForm postId="1" />);

      expect(screen.getByRole('button', { name: /comment/i })).toBeInTheDocument()
      expect(screen.queryByRole('button', { name: /reply/i })).not.toBeInTheDocument()
    })
  });

  describe('interacting with form', () => {
    it('submit button is disabled until user inputs', async () => {
      const user = userEvent.setup();
      customRender(<CommentForm postId="1" />);

      const input = screen.getByPlaceholderText(/what are your thoughts?/i);
      const button = screen.getByRole('button', /comment/i);

      expect(button).toHaveAttribute('disabled');
      
      await user.type(input, 'Good post!');

      expect(input).toHaveValue('Good post!');
      expect(button).not.toHaveAttribute('disabled');
    });
  });
});
