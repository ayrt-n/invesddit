import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function MainLayout() {
  return (
    <div className="bg-canvas min-h-screen font-sans">
      <Navbar />
      <div className="pt-[48px]">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout;
