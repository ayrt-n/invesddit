import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

function Login() {
  return (
    <div className="py-[20px] px-[24px]">
      <LoginForm />
      <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
        <div>
          New to Invesddit?
          <Link to="/signup" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Sign up</Link>
        </div>
        <div>
          Forgot your
          <Link to="/forgot-password" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">password</Link>
          ?
        </div>
      </div>
    </div>
  );
}

export default Login;
