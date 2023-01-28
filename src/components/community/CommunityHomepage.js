import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommunityHeader from './CommunityHeader';
import AboutCommunityWidget from './AboutCommunityWidget';
import { getCommunity } from '../../services/communityService';
import CommunityFeed from './CommunityFeed';

function CommunityHomepage() {
  let { id } = useParams();

  const [community, setCommunity] = useState(null);
  useEffect(() => {
    getCommunity(id).then(data => setCommunity(data));
  }, [id]);

  if (!community) return null;

  return (
    <div>
      <Link to={`/c/${id}`}>
        <div className="h-[64px] bg-blue-300" />
      </Link>
      <CommunityHeader title={community.title || community.sub_dir} id={id} />

      <div className="py-[20px] px-[24px]">
        <div className="mx-auto max-w-min flex">
          {/* Main Post Feed */}
          <div className="w-[640px]">
            <CommunityFeed community={id} />
          </div>

          {/* Feed Sidebar */}
          <div className="w-[312px] ml-[24px]">
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
