import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PillButton from '../PillButton';

describe('Pill Button component', () => {
  describe('renders component', () => {
    it('renders primary variant by default', () => {
      render(
        <PillButton>
          Test
        </PillButton>
      );

      const button = screen.getByRole('button', { name: /test/i });

      expect(button).toHaveClass('bg-primary-500', 'hover:bg-primary-400', 'active:bg-primary-300', 'text-white');
    });
    
    it('renders primary variant if specified', () => {
      render(
        <PillButton variant="primary">
          Test
        </PillButton>
      );

      const button = screen.getByRole('button', { name: /test/i });

      expect(button).toHaveClass('bg-primary-500', 'hover:bg-primary-400', 'active:bg-primary-300', 'text-white');
    });

    it('renders inverted variant if specified', () => {
      render(
        <PillButton variant="inverted">
          Test
        </PillButton>
      );

      const button = screen.getByRole('button', { name: /test/i });

      expect(button).toHaveClass('border-[1px]', 'text-primary-500', 'border-primary-500', 'hover:bg-blue-50', 'active:bg-blue-100');
    });

    it('renders danger variant if specified', () => {
      render(
        <PillButton variant="danger">
          Test
        </PillButton>
      );

      const button = screen.getByRole('button', { name: /test/i });

      expect(button).toHaveClass('bg-primary-500', 'hover:bg-red-500', 'active:bg-red-300', 'text-white');
    });

    it('renders as different component if specified', () => {
      render(
        <PillButton as="a" href="/test">
          Test
        </PillButton>
      );

      const button = screen.getByRole('link', { name: /test/i });

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('href', '/test');
    });
  });
});
