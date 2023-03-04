import React, { useState, useEffect } from 'react';
import PillButton from '../PillButton';
import ProfileForm from './ProfileForm';
import { getCurrentAccount } from '../../services/accountService';

function ProfileSettings() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getCurrentAccount().then(data => {
      setProfile(data.data);
    });
  }, [])

  if (!profile) return null;

  return (
    <div className="min-h-[calc(100vh-48px)] bg-canvas-light pb-[40px]">
      <div className="max-w-[1200px] mx-auto flex px-[16px]">
        <div className="max-w-[688px] flex-auto">
          <div className="border-b-[1px] border-nav-border">
            <h1 className="text-[18px] font-medium leading-[22px] py-[16px] px-[20px]">
              User Settings
            </h1>
          </div>
          <div className="px-[20px]">
            <h2 className="text-[20px] font-medium leading-[24px] py-[40px]">
              Profile Settings
            </h2>
            <h3 className="text-[10px] text-meta-text font-bold leading-[12px] border-b-[1px] border-nav-border pb-[6px] mb-[32px]">
              PROFILE INFORMATION
            </h3>
            <ProfileForm profile={profile} updateProfile={setProfile} />
          </div>
          <div className="px-[20px]">
            <h2 className="text-[20px] font-medium leading-[24px] py-[40px]">
              Account Settings
            </h2>
            <h3 className="text-[10px] text-meta-text font-bold leading-[12px] border-b-[1px] border-nav-border pb-[6px] mb-[32px]">
              ACCOUNT PREFERENCES
            </h3>
            <div className="flex flex-wrap mb-[32px]">
              <div className="flex flex-col mr-[8px] max-w-[80%]">
                <h3 className="text-[16px] font-medium leading-[20px] mb-[4px]">
                  Email address
                </h3>
                <p className="text-meta-text text-[12px] leading-[16px] lowercase">
                  {profile.email}
                </p>
              </div>
              <div className="flex grow justify-end items-center">
                <div>
                  <PillButton variant="inverted">
                    Change
                  </PillButton>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mb-[32px]">
              <div className="flex flex-col mr-[8px] max-w-[80%]">
                <h3 className="text-[16px] font-medium leading-[20px] mb-[4px]">
                  Change password
                </h3>
                <p className="text-meta-text text-[12px] leading-[16px]">
                  Password must be at least 8 characters long
                </p>
              </div>
              <div className="flex grow justify-end items-center">
                <div>
                  <PillButton variant="inverted">
                    Change
                  </PillButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
