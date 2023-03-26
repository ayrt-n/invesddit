import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCommunity } from '../../services/communityService';
import EditCommunityForm from './EditCommunityForm';

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
    <div className="min-h-[calc(100vh-48px)] bg-canvas-light pb-[40px]">
      <div className="max-w-[1200px] mx-auto px-[16px]">
        <div className="max-w-[688px]">
          <div className="border-b-[1px] border-nav-border">
            <h1 className="text-[18px] font-medium leading-[22px] py-[16px] px-[20px]">
              Mod Tools
              <span className="mx-[4px]">
                - 
              </span>
              <Link to={`/c/${community.sub_dir}`} className="text-primary-500">
                c/{community.sub_dir}
              </Link>
            </h1>
          </div>
          <div className="px-[20px]">
            <h2 className="text-[20px] font-medium leading-[24px] py-[40px]">
              Community Settings
            </h2>
            <h3 className="text-[10px] text-meta-text font-bold leading-[12px] border-b-[1px] border-nav-border pb-[6px] mb-[32px]">
              COMMUNITY INFORMATION
            </h3>
            <EditCommunityForm community={community} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySettings;
