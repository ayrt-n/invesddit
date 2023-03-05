import React from 'react';
import EmptyFeed from '../EmptyFeed'

function EmptyProfileFeed({ username }) {
  return (
    <EmptyFeed>
      <div className="m-[16px] text-[18px] font-medium leading-[22px]">
        {`Hmmm... It doesn't seem like u/${username} has posted anything`}
      </div>
    </EmptyFeed>
  );
}

export default EmptyProfileFeed;
