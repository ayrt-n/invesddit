import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCommunity } from '../../services/communityService';
import CommunityForm from './CommunityForm';

function CommunitySettings() {
  let { community_id } = useParams()
  const [community, setCommunity] = useState(null);

  useEffect(() => {
    getCommunity(community_id).then(data => {
      setCommunity(data.data);
    })
    .catch(err => console.error(err));
  }, [community_id]);

  if (!community) return null;

  return (
    <div>
      <div className="py-[20px] px-[24px]">
        <div className="mx-auto max-w-min flex">
          <div className="w-[640px]">
            <div className="p-[4px] my-[16px] border-b-[1px] border-nav-border min-h-[43px]">
              <div className="text-[18px] font-medium leading-[22px]">
                <Link to={`/c/${community.sub_dir}`} className="text-primary-500">
                  c/{community.sub_dir}
                </Link>
                <span className="mx-[4px]">-</span>
                Settings
              </div>
            </div>
            
            <CommunityForm community={community} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySettings;
