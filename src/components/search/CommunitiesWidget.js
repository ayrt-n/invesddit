import React from 'react';
import { Link } from 'react-router-dom';
import SearchWidget from './SearchWidget';
import SearchWidgetItem from './SearchWidgetItem';
import SearchWidgetLoading from './SearchWidgetLoading';

function CommunitiesWidget({ communities, loading }) {
  if (loading) return <SearchWidgetLoading header="Communities" />;
  
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
            <Link to="/" className="text-[14px] leading-[18px] text-primary-500 font-medium">
              See more communities
            </Link>
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
