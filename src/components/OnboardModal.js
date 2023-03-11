import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function OnboardModal({ initialState, callToAction }) {
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
  
  if (content === 'signup') {
    return (
      <div className="max-w-[280px] mx-auto">
        <SignUpForm callToAction={callToAction} links={signupLinks} />
      </div>
    );
  }

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

  if (content === 'login') {
    return (
      <div className="max-w-[280px] mx-auto">
        <LoginForm links={loginLinks} />
      </div>
    );
  }

  
  // Password recovery content
  const recoveryLinks = (
    <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
      <div>
        New to Invesddit?
        <button onClick={() => setContent('signup')} className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Sign up</button>
      </div>
    </div>
  );
  
  return (
    <div className="max-w-[280px] mx-auto">
      Recover password
    </div>
  );
}

export default OnboardModal;
