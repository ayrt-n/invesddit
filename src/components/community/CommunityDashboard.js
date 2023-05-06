import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Link, Outlet, useParams } from 'react-router-dom';
import CommunityHeader from './CommunityHeader';
import AboutCommunityWidget from './AboutCommunityWidget';
import PillButton from '../PillButton';

function CommunityHomepage() {
  let { community_id } = useParams();
  const [community, setCommunity] = useFetch(`api/v1/communities/${community_id}`)

  const updateCommunity = (values) => {
    setCommunity((prev) => {
      return {...prev, ...values }
    })
  };

  if (community.isLoading) return null;

  return (
    <div>
      <CommunityHeader
        title={community.data.title || community.data.sub_dir}
        id={community_id}
        isMember={community.data.is_member}
        membershipCount={community.data.memberships_count}
        updateCommunity={updateCommunity}
        avatar={community.data.avatar}
        banner={community.data.banner}
      />

      <div className="py-[20px] md:px-[24px]">
        <div className="mx-auto max-w-min flex">
          {/* Main Post Feed */}
          <div className="w-[640px]">
            <Outlet />
          </div>

          {/* Feed Sidebar */}
          <div className="w-[312px] ml-[24px] hidden md:block">
            {community.data.is_admin ?
              <PillButton
                as={Link}
                to="settings"
                className="mb-[16px] flex justify-center items-center"
              >
                <svg className="w-[20px] h-[20px] mr-[6px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>security</title>
                  <path fill="currentColor" d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z" />
                </svg>
                Mod Tools
              </PillButton> :
              null
            }
            <AboutCommunityWidget
              description={community.data.description}
              createdAt={community.data.created_at}
              membershipCount={community.data.memberships_count}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHomepage;
