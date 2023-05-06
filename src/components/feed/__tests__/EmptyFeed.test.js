import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import EmptyFeed from '../EmptyFeed';

// Mock Empty Post component
jest.mock('../EmptyPost', () => () => (
  <div></div>
));

describe('EmptyFeed component', () => {
  describe('rendering component', () => {
    it('correctly renders component with children', () => {
      const { container } = render(
        <EmptyFeed>
          <p>Children to be rendered</p>
          <button>Render me!</button>
        </EmptyFeed>
      );

      expect(container).toMatchSnapshot();
    });
  });
});