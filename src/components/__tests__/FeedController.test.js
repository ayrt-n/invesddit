import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import FeedController from '../FeedController';
import { MemoryRouter } from 'react-router-dom';

const customRender = (searchParams='') => {
  render(
    <MemoryRouter initialEntries={[searchParams]}>
      <FeedController />
    </MemoryRouter>
  );
}

describe('Feed Controller component', () => {
  describe('renders component', () => {
    it('renders hot button selected by default', () => {
      customRender();

      const hotButton = screen.getByRole('button', { name: /sort feed by hot/i });
      const newButton = screen.getByRole('button', { name: /sort feed by new/i });
      const topButton = screen.getByRole('button', { name: /sort feed by top/i });

      expect(hotButton).toHaveClass('bg-gray-100', 'text-gray-100');
      expect(newButton).not.toHaveClass('bg-gray-100', 'text-gray-100');
      expect(topButton).not.toHaveClass('bg-gray-100', 'text-gray-100');
    });
    
    it('renders hot button selected if url includes sort_by=hot', () => {
      customRender('?sort_by=hot');

      const hotButton = screen.getByRole('button', { name: /sort feed by hot/i });
      const newButton = screen.getByRole('button', { name: /sort feed by new/i });
      const topButton = screen.getByRole('button', { name: /sort feed by top/i });

      expect(hotButton).toHaveClass('bg-gray-100', 'text-gray-100');
      expect(newButton).not.toHaveClass('bg-gray-100', 'text-gray-100');
      expect(topButton).not.toHaveClass('bg-gray-100', 'text-gray-100');
    });

    it('renders new button selected if url includes sort_by=new', () => {
      customRender('?sort_by=new');

      const hotButton = screen.getByRole('button', { name: /sort feed by hot/i });
      const newButton = screen.getByRole('button', { name: /sort feed by new/i });
      const topButton = screen.getByRole('button', { name: /sort feed by top/i });

      expect(hotButton).not.toHaveClass('bg-gray-100', 'text-gray-100');
      expect(newButton).toHaveClass('bg-gray-100', 'text-gray-100');
      expect(topButton).not.toHaveClass('bg-gray-100', 'text-gray-100');
    });

    it('renders top button selected if url includes sort_by=top', () => {
      customRender('?sort_by=top');

      const hotButton = screen.getByRole('button', { name: /sort feed by hot/i });
      const newButton = screen.getByRole('button', { name: /sort feed by new/i });
      const topButton = screen.getByRole('button', { name: /sort feed by top/i });

      expect(hotButton).not.toHaveClass('bg-gray-100', 'text-gray-100');
      expect(newButton).not.toHaveClass('bg-gray-100', 'text-gray-100');
      expect(topButton).toHaveClass('bg-gray-100', 'text-gray-100');
    });
  });
});
