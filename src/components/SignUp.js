import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';

// User registration form component, used to register users for an account
function SignUp() {
  const signupLinks = (
    <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
      <div>
        Already have an account?
        <Link to="/login" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Log in</Link>
      </div>
    </div>
  );

  return (
    <div className="py-[20px] px-[24px]">
        <SignUpForm links={signupLinks} />
    </div>
  );
}

export default SignUp;
