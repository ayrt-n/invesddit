import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LinkContent from '../LinkContent';

describe('Link Content component', () => {
  it('renders link content correctly', () => {
    const linkProp = "www.google.com"
    render(<LinkContent link={linkProp} />);
    
    const link = screen.getByRole('link')

    expect(link).toHaveTextContent(linkProp);
    expect(link).toHaveAttribute('href', linkProp);
  });
});
