import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../assets/icons/invesddit-logo.svg';
import PillButton from '../PillButton';

function CommunityHomepage() {
  let { id } = useParams();

  const community = {
    title: 'The Official Coca Cola Subinvesddit',
    sub_dir: 'KO',
  }

  return (
    <div>
      <Link to={`/c/${id}`}>
        <div className="h-[64px] bg-blue-300" />
      </Link>
      <div className="w-full bg-canvas-light">
        <div className="max-w-[984px] px-[16px] mx-auto flex">
          <div className="mb-[12px] mt-[-14px] flex">
            <img src={logo} alt={`community logo for ${id}`} className="h-[72px] w-[72px] rounded-full border-[4px] border-canvas-light" />
            <div className="mt-[24px] pl-[16px] inline-flex items-start flex-1 justify-between w-full">
              <div className="inline-block pr-[24px]">
                <h1 className="text-[28px] font-bold leading-[32px] pr-[2px] pb-[4px]">
                  {community.title}
                </h1>
                <h2 className="text-[14px] font-medium leading-[18px] text-meta-text">
                  {`c/${community.sub_dir}`}
                </h2>
              </div>
              <div>
                <PillButton variant="inverted" additionalClasses="w-[96px]">
                  Join
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHomepage;
