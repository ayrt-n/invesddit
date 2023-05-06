import React from 'react';
import PillButton from '../PillButton';
import { Link } from 'react-router-dom';
import { CommunityAvatar } from '../Avatar';
import formatCount from '../common/formatCount';
import TooltipWrapper from './TooltipWrapper';

function CommunityTooltip({ community }) {
  return (
    <TooltipWrapper>
      <div className="p-[12px]">
        <div className="w-full flex">
          <CommunityAvatar src={community.avatar} className="h-[32px] w-[32px] mr-[8px] shrink-0 bg-canvas-light" alt={`avatar for c/${community.sub_dir}`} />
          <Link to={`/c/${community.sub_dir}`} className="text-[16px] font-medium leading-[20px] items-center flex">
            {`c/${community.sub_dir}`}
          </Link>
        </div>
        <div className="py-[8px]">
          <div className="text-[16px] font-medium leading-[20px]">
            {formatCount(community.memberships_count)}
          </div>
          <div className="text-[12px] leading-[16px] text-meta-text">
            Members
          </div>
        </div>
        {community.description &&
          <div className="text-[12px] leading-[16px] break-words py-[8px]" data-testid="description">
            {community.description}
          </div>
        }
        <PillButton as={Link} to={`/c/${community.sub_dir}`}>
          View Community
        </PillButton>
      </div>
    </TooltipWrapper>
  );
}

export default CommunityTooltip;
