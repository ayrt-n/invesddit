import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchWidget from './SearchWidget';
import SearchWidgetItem from './SearchWidgetItem';
import SearchWidgetLoading from './SearchWidgetLoading';


function CommunitiesWidget({ communities, loading }) {
  const [ , setSearchParams] = useSearchParams();
  if (loading) return <SearchWidgetLoading header="Communities" />;
  
  const handleClick = () => {
    setSearchParams(searchParams => {
      searchParams.set('type', 'communities');
      return searchParams;
    })
  }

  return (
    <SearchWidget header="Communites">
      {communities.length > 0 ?
        <>
          {communities.map(community => (
            <SearchWidgetItem
              title={`c/${community.sub_dir}`}
              subtitle={`${community.memberships_count} Members`}
              avatar={community.avatar}
              link={`/c/${community.sub_dir}`}
              key={community.id}
            />
          ))}
          <div className="p-[16px]">
            <button onClick={handleClick} className="text-[14px] leading-[18px] text-primary-500 font-medium">
              See more communities
            </button>
          </div>
        </> :
        <div className="p-[16px]">
          No communities
        </div>
      }
    </SearchWidget>
  );
}

export default CommunitiesWidget;
