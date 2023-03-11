import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { verifyAccount } from '../services/authService';
import DangerMessage from './DangerMessage';
import PillButton from './PillButton';
import SuccessMessage from './SuccessMessage';

function VerifyAccount() {
  const [searchParams] = useSearchParams();
  const [verificationState, setVerificationState] = useState('loading');

  useEffect(() => {
    // Get verification key from search params
    let key = searchParams.get('key')

    // Submit key to API - If successful, set verification state to success
    verifyAccount(key).then(data => {
      if (data.success) {
        setVerificationState('success');
      } else {
        setVerificationState('error');
      }
    })
  }, [searchParams]);

  return (
    <div className="min-h-[calc(100vh-48px)] bg-canvas-light">
      <div className="py-[20px] px-[24px]">
        <div className="mx-auto max-w-min flex">
          <div className="w-[640px] p-[16px]">
            {/* Skeleton loader */}
            {verificationState === 'loading' ?
              <div className="animate-pulse">
                <div className="flex flex-col items-center">
                  <div className="h-[36px] w-[50%] my-[16px] bg-slate-100" />
                  <div className="h-[72px] w-[80%] mb-[16px] bg-slate-100" />
                  <div className="w-[200px] h-[32px] mb-[16px] bg-slate-100" />
                </div>
              </div> :

            // If successful, display success message with login link
            verificationState === 'success' ?
              <SuccessMessage header="Success!" message="Your account has been successfully verified.">
                <div className="w-[200px] mb-[16px]">
                  <PillButton as={Link} to="/login">
                    Log in!
                  </PillButton>
                </div>
              </SuccessMessage> :
              
              // If unsuccessful, display danger message with login link and resend verification link
              <DangerMessage header="Something went wrong!" message="We were unable to verify your account. You may already be verified, try logging in!">
                  <div className="w-[200px] mb-[16px]">
                    <PillButton as={Link} target="_blank" to="/login">
                      Log in
                    </PillButton>
                  </div>
                  <div className="text-[14px] text-center mb-[16px]">
                    <span className="mr-[4px]">If that doesn't work, try</span>
                    <a className="underline text-primary-500 leading-[24px]" href="/resend-verification">resending the verification email.</a>
                  </div>
              </DangerMessage>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAccount;
