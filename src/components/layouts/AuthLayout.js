import React from 'react';
import { Outlet } from 'react-router-dom';
import banner from '../../assets/images/auth-banner.png'

function AuthLayout() {
  return (
    <div className="bg-canvas-light min-h-screen font-sans flex w-full">
      <div className="w-[156px] bg-no-repeat bg-cover" style={{backgroundImage: `url(${banner})`}} />
      <div className="p-[24px]">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout;
