import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MediaContent from '../MediaContent';

describe('Media Content component', () => {
  it('renders media content correctly', () => {
    const media = 'fake.com/image.jpg'
    render(<MediaContent media={media} />);

    const image = screen.getByAltText('user post');
    const link = screen.getByRole('link');

    expect(image).toHaveAttribute('src', media);
    expect(link).toHaveAttribute('href', media);
  });

  describe('when preview', () => {
    it('renders media preview content correctly', () => {
      const media = 'fake.com/image.jpg'
      render(<MediaContent media={media} isPreview />);
  
      const image = screen.getByAltText('user post');
      
      expect(image).toHaveAttribute('src', media);
    });
  });
});
