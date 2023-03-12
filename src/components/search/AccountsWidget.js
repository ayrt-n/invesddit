import React from 'react';
import { Link } from 'react-router-dom';
import SearchWidget from './SearchWidget';
import SearchWidgetItem from './SearchWidgetItem';
import SearchWidgetLoading from './SearchWidgetLoading';

function AccountsWidget({ accounts, loading }) {
  if (loading) return <SearchWidgetLoading header="Accounts" />;
  
  return (
    <SearchWidget header="Accounts">
      {accounts.length > 0 ?
        <>
          {accounts.map(account => (
            <SearchWidgetItem
              title={`u/${account.username}`}
              avatar={account.avatar}
              link={`/profile/${account.username}`}
              key={account.id}
            />
          ))}
          <div className="p-[16px]">
            <Link to="/" className="text-[14px] leading-[18px] text-primary-500 font-medium">
              See more communities
            </Link>
          </div>
        </> :
        <div className="p-[16px]">
          No accounts
        </div>
      }
    </SearchWidget>
  );
}

export default AccountsWidget;
