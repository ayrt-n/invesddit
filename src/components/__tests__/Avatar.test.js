import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Avatar from '../Avatar';

describe('Avatar component', () => {
  describe('rendering component', () => {
    it('renders avatar with correct attributes', () => {
      render(<Avatar classNames="test" src="test" alt="test" />);

      const avatar = screen.getByAltText('test');
  
      expect(avatar).toHaveAttribute('src', 'test');
      expect(avatar).toHaveClass('test');
    })
  });
});
