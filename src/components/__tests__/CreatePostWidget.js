import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import CreatePostWidget from '../CreatePostWidget';
import { MemoryRouter } from 'react-router-dom';
import AccountContext from '../../contexts/account/AccountContext';

const customRender = (childComponent, {providerProps, ...renderOptions}) => {
  return render(
    <AccountContext.Provider {...providerProps}>
      {childComponent}
    </AccountContext.Provider>,
    renderOptions
  );
};

describe('Create Post Widget component', () => {
  describe('renders component', () => {
    it('correctly renders if account context provides user', () => {
      const providerProps = {
        value: {
          currentAccount: {
            username: 'test',
            avatar: 'test.jpg'
          }
        }
      };

      customRender(<CreatePostWidget />, {providerProps, wrapper: MemoryRouter})

      const userAvatar = screen.getByAltText(/avatar for test/i)
      const userLink = screen.getByRole('link', {name: /test's profile/i})

      expect(userAvatar).toBeInTheDocument();
      expect(userLink).toBeInTheDocument();
    });

    it('renders null if no current account', () => {
      const providerProps = {
        value: {
          currentAccount: null
        }
      };

      customRender(<CreatePostWidget />, {providerProps, wrapper: MemoryRouter})

      const userAvatar = screen.queryByAltText(/avatar for test/i)
      const userLink = screen.queryByRole('link', {name: /test's profile/i})

      expect(userAvatar).toBeNull();
      expect(userLink).toBeNull();
    });
  })
});