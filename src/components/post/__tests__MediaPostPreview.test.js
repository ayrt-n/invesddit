import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MediaPostPreview from '../MediaPostPreview';

describe('Media Content component', () => {
  it('renders media content correctly', () => {
    const media = 'fake.com/image.jpg'
    render(<MediaPostPreview media={media} />);

    const image = screen.getByAltText('user post');

    expect(image).toHaveAttribute('src', media);
  });
});
