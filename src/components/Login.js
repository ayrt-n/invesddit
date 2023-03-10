import React from 'react';
import LoginForm from './LoginForm';

function Login() {
  return (
    <div className="max-w-[400px] bg-canvas-light mx-auto overflow-auto mt-4 rounded-[20px]">
      <div className="my-[24px]">
        <h1 className="font-medium text-[20px] leading-[24px]">Log in</h1>
        <p className="mt-[8px] text-[12px] leading-[16px]">
          By continuing, you agree to setting up an Invesddit account and agree to our <a href="/user-agreement" target="_blank" className="underline text-primary-500">User Agreement</a> and <a href="/user-agreement" target="_blank" className="underline text-primary-500">Privacy Policy.</a>
        </p>
      </div>
      <LoginForm />
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
    </div>
  );
}

export default Login;
