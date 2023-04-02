import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchFeed from './SearchFeed';
import { searchAccounts } from '../../services/accountService';
import SearchFeedLoading from './SearchFeedLoading';
import EmptySearch from './EmptySearch';
import SearchFeedItem from './SearchFeedItem';


function AccountsSearchResults() {
  const [searchParams] = useSearchParams();
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = { q: searchParams.get('q') };
    setLoading(true);

    searchAccounts(params).then(data => {
      setAccounts(data.data);
      setLoading(false);
    })
  }, [searchParams]);


  // Return skeleton loader while loading
  if (loading) return (
    <div className="w-[976px]">
      <SearchFeedLoading />
    </div>
  );

  // Otherwise return search feed with account results
  return (
    <div className='w-[976px]'>
        {accounts.length > 0 ?
          <SearchFeed>
            {accounts.map(account => (
              <SearchFeedItem
                key={account.id}
                title={`u/${account.username}`}
                avatar={account.avatar}
                link={`/profile/${account.username}`}  
              />
            ))}
          </SearchFeed> :
          <EmptySearch searchTerm={searchParams.get('q')} />
        }
    </div>
  );
}

export default AccountsSearchResults;
