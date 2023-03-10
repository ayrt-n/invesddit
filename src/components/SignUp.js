import React from 'react';
import SignUpForm from './SignUpForm';

// User registration form component, used to register users for an account
function SignUp() {
  return (
    <div className="max-w-[400px] bg-canvas-light mx-auto overflow-auto mt-4 rounded-[20px]">
      <div className="max-w-[280px] mx-auto">
        <SignUpForm />
        
        <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
          <div>
            Already have an account?
            <a href="/login" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
