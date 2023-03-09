import React from 'react';
import SignUpForm from './SignUpForm';

// User registration form component, used to register users for an account
function SignUp() {
  return (
    <div className="max-w-[400px] bg-canvas-light mx-auto overflow-auto mt-4 rounded-[20px]">
      <SignUpForm />
    </div>
  );
}

export default SignUp;
