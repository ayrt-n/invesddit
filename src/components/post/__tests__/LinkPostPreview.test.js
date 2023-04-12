import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LinkPostPreview from '../LinkPostPreview';

describe('Link Post Preview component', () => {
  it('renders link content correctly', () => {
    const linkProp = "www.google.com"
    render(<LinkPostPreview link={linkProp} />);
    
    const link = screen.getByRole('link')

    expect(link).toHaveTextContent(linkProp);
    expect(link).toHaveAttribute('href', linkProp);
  });
});
