import React from 'react';
import { Link } from 'react-router-dom';
import ResetPasswordForm from './ResetPasswordForm';

function ResetPassword() {
  return (
    <div className="py-[20px] px-[24px]">
      <ResetPasswordForm />
      <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
        <div>
          Ready to go? 
          <Link to="/login" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Log in</Link>
        </div>
        <div>
          Still having issues?
          <Link to="/forgot-password" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Resend password reset</Link>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword;