import React from 'react';
import LoginForm from './LoginForm';

function Login() {
  const loginLinks = (
    <div className="text-[12px] leading-[16px] mt-[16px] mb-[24px]">
      <div>
        New to Invesddit?
        <a href="/signup" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">Sign up</a>
      </div>
      <div>
        Forgot your
        <a href="/forgot-password" className="underline ml-[2px] text-primary-500 font-bold leading-[24px]">password</a>
        ?
      </div>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-48px)] bg-canvas-light">
      <div className="py-[20px] px-[24px]">
        <div className="max-w-[280px] mx-auto">
          <LoginForm links={loginLinks} />
        </div>
      </div>
    </div>
  );
}

export default Login;
