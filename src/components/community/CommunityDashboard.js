import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import CommunityHeader from './CommunityHeader';
import AboutCommunityWidget from './AboutCommunityWidget';
import { getCommunity } from '../../services/communityService';

function CommunityHomepage() {
  let { community_id } = useParams();

  const [community, setCommunity] = useState(null);
  useEffect(() => {
    getCommunity(community_id).then(data => {
      setCommunity(data.data)
    })
    .catch(err => console.error(err));
  }, [community_id]);

  const setMembership = (bool) => {
    setCommunity((prev) => {
      return {...prev, is_member: bool }
    })
  };

  if (!community) return null;

  return (
    <div>
      <Link to={`/c/${community_id}`}>
        <div className="h-[64px] bg-blue-300" />
      </Link>
      <CommunityHeader
        title={community.title || community.sub_dir}
        id={community_id}
        isMember={community.is_member}
        setMembership={setMembership}
      />

      <div className="py-[20px] px-[24px]">
        <div className="mx-auto max-w-min flex">
          {/* Main Post Feed */}
          <div className="w-[640px]">
            <Outlet />
          </div>

          {/* Feed Sidebar */}
          <div className="w-[312px] ml-[24px] hidden md:block">
            <AboutCommunityWidget
              description={community.description}
              createdAt={community.created_at}
              membershipCount={community.memberships_count}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHomepage;
