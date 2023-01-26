import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../assets/icons/invesddit-logo.svg';
import PillButton from '../PillButton';
import CommunityHeader from './CommunityHeader';

function CommunityHomepage() {
  let { id } = useParams();

  const community = {
    title: 'The Official Coca Cola Subinvesddit',
  }

  return (
    <div>
      <Link to={`/c/${id}`}>
        <div className="h-[64px] bg-blue-300" />
      </Link>
      <CommunityHeader title={community.title} id={id} />
    </div>
  );
}

export default CommunityHomepage;
