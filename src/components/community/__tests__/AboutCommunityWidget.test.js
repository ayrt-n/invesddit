import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutCommunityWidget from '../AboutCommunityWidget';

jest.mock('../../ProtectedLink', () => () => {
  'a'
});

describe('About Community Widget component', () => {
  describe('renders component', () => {
    it('correctly renders description, created at date, and membership count', () => {
      const { container } = render(
        <AboutCommunityWidget
          description="Test description"
          createdAt="2023-03-21T11:40:13.839Z"
          membershipCount="14309"
        />
      );

      expect(container).toMatchSnapshot();
    });
  });
});
