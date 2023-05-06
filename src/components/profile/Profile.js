import React from 'react';
import { useParams } from 'react-router-dom';
import FeedController from '../feed/FeedController';
import BackToTopWidget from '../BackToTopWidget';
import ProfileWidget from './ProfileWidget';
import EmptyProfileFeed from './EmptyProfileFeed';
import Feed from '../feed/Feed';

function Profile() {
  let { username } = useParams();

  return (
    <div className="py-[20px] md:px-[24px]">
      <div className="mx-auto max-w-min flex">
        {/* Main Post Feed */}
        <div className="w-[640px]">
          <FeedController />

          <Feed
            subdir={`api/v1/accounts/${username}/posts`}
            emptyFeed={<EmptyProfileFeed username={username} />}
          />
        </div>

        {/* Feed Sidebar */}
        <div className="w-[312px] ml-[24px] hidden md:block">
          <ProfileWidget username={username} />
          <div className="sticky top-[calc(100vh-8px)] translate-y-[-100%]">
            <BackToTopWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
