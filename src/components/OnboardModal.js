import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import RecoverPasswordForm from './RecoverPasswordForm';

function OnboardModal({ initialState, callToAction, closeModal }) {
  const [content, setContent] = useState(initialState || 'signup');
  
  // Sign up content
  const signupLinks = (
    <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
      <div>
        Already have an account?
        <button onClick={() => setContent('login')} className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">
          Log in
        </button>
      </div>
    </div>
  );

  // Login content
  const loginLinks = (
    <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
      <div>
        New to Invesddit?
        <button onClick={() => setContent('signup')} className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Sign up</button>
      </div>
      <div>
        Forgot your
        <button onClick={() => setContent('recover')} className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">
          password
        </button>
        ?
      </div>
    </div>
  );

  // Password recovery content
  const recoveryLinks = (
    <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
      <div>
        Don't have an Invesddit account?
        <button onClick={() => setContent('signup')} className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Sign up</button>
      </div>
      <div>
        Already have an account?
        <button onClick={() => setContent('login')} className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">
          Log in
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-row-reverse h-[50px] justify-start items-start">
        <button onClick={closeModal} aria-label="close modal" className="mt-[16px] mr-[16px] text-feed-text">
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]">
            <polygon fill="currentColor" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"></polygon>
          </svg>
        </button>
      </div>
      <div className="max-w-[280px] mx-auto">
        {content === 'signup' ?
          <SignUpForm callToAction={callToAction} links={signupLinks} /> :
        content === 'login' ?
          <LoginForm links={loginLinks} /> :
          <RecoverPasswordForm links={recoveryLinks} />
        }
      </div>
      <div className="h-[50px]" />
    </>
  );
}

export default OnboardModal;
