import React from 'react';
import { Link } from 'react-router-dom';
import RecoverPasswordForm from './RecoverPasswordForm';

function RecoverPassword() {
  const recoveryLinks = (
    <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
      <div>
        Don't have an Invesddit account?
        <Link to="/signup" href="/signup" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Sign up</Link>
      </div>
      <div>
        Already have an account?
        <Link to="/login" href="/signup" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Log in</Link>
      </div>
    </div>
  );

  return (
    <div className="py-[20px] px-[24px]">
        <RecoverPasswordForm links={recoveryLinks} />
    </div>
  );
}

export default RecoverPassword;
