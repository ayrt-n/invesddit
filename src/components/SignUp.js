import React from 'react';
import SignUpForm from './SignUpForm';

// User registration form component, used to register users for an account
function SignUp() {
  const signupLinks = (
    <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
      <div>
        Already have an account?
        <a href="/login" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Log in</a>
      </div>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-48px)] bg-canvas-light">
      <div className="py-[20px] px-[24px]">
        <div className="max-w-[280px] mx-auto">
          <SignUpForm links={signupLinks} />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
