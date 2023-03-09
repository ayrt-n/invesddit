import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { verifyAccount } from '../services/authService';
import PillButton from './PillButton';

function VerifyAccount() {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let key = searchParams.get('key')

    verifyAccount(key).then(data => {
      setIsLoading(false);
    })
  }, [searchParams]);

  return (
    <div className="py-[20px] px-[24px]">
      <div className="mx-auto max-w-min flex">
        <div className="w-[640px]">
          <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] rounded-[4px] p-[16px]">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center my-[16px] relative">
                <div className="text-inv-green-500 absolute left-[-48px]">
                  <svg className="w-[36px] mr-[4px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>check-decagram</title>
                    <path fill="currentColor" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                  </svg>
                </div>
                <div className="text-[24px] font-medium">
                  Success!
                </div>
              </div>
              <div className="text-[18px] text-center mb-[16px]">
                Your account has been successfully verified. 
              </div>
              <div className="w-[200px] mb-[16px]">
                <PillButton as={Link} to="/login">
                  Log in!
                </PillButton>
              </div>
            </div>
          </div>
          <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] rounded-[4px] p-[16px]">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center my-[16px] relative">
                <div className="text-red-500 absolute left-[-48px]">
                  <svg className="w-[36px] mr-[4px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>alert-circle-outline</title>
                    <path fill="currentColor" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
                  </svg>
                </div>
                <div className="text-[24px] font-medium">
                  Something went wrong!
                </div>
              </div>
              <div className="text-[18px] text-center mb-[16px]">
                We were unable to verify your account. You may already by verified, try logging in!
              </div>
              <div className="w-[200px] mb-[16px]">
                <PillButton as={Link} to="/login">
                  Log in
                </PillButton>
              </div>
              <div className="text-[18px] text-center mb-[16px]">
                <span className="mr-[4px]">If that doesn't work, try</span>
                <a className="underline text-primary-500 leading-[24px]" href="/resend-verification">resending the verification email.</a>
              </div>
            </div>
          </div>
          <div className="bg-canvas-light border-[1px] border-post-border mb-[10px] rounded-[4px] p-[16px]">
            <div className="animate-pulse">
              <div className="flex flex-col items-center">
                <div className="h-[36px] w-[50%] my-[16px] bg-slate-100" />
                <div className="h-[72px] w-[80%] mb-[16px] bg-slate-100" />
                <div className="w-[200px] h-[32px] mb-[16px] bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAccount;
