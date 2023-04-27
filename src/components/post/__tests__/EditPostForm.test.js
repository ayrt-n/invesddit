import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import EditPostForm from '../EditPostForm';

jest.mock('../../../services/postService', () => ({
  updatePost: () => Promise.resolve()
}));


describe('Edit Post Form component', () => {
  it('disables the submit button if input unchanged or invalid', async () => {
    const user = userEvent.setup();
    render(<EditPostForm content="Test" />);

    const textarea = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', {name: /save/i});

    expect(submitButton).toBeDisabled();
    await user.type(textarea, 'Hi');
    expect(submitButton).not.toBeDisabled();
  });

  it('calls close form when cancelled', async () => {
    const user = userEvent.setup();
    const mockClose = jest.fn();

    render(<EditPostForm content="" closeEdit={mockClose} />);
    const cancelButton = screen.getByRole('button', {name: /cancel/i})
    await user.click(cancelButton);

    expect(mockClose).toHaveBeenCalled();
  });
});
