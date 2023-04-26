import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import PostActions from '../PostActions';
import { MemoryRouter } from 'react-router-dom';

describe('Post Actions component', () => {
  describe('when post author is same as current account', () => {
    it('renders post options', () => {
      render(
        <MemoryRouter>
          <PostActions showPostDropdown accountId="2" />
        </MemoryRouter>,
        { accountValues:
          { currentAccount:
            { data: { id: "2" }}
          }
        }
      );

      expect(screen.getByRole('button', {name: /post options/i})).toBeInTheDocument();
    });

    describe('when post author is not same as current account', () => {
      it('does not render post options', () => {
        render(
          <MemoryRouter>
            <PostActions showPostDropdown accountId="1" />
          </MemoryRouter>,
          { accountValues:
            { currentAccount:
              { data: { id: "2" }}
            }
          }
        );
  
        expect(screen.queryByRole('button', {name: /post options/i})).not.toBeInTheDocument();
      });
    });
  });
});
