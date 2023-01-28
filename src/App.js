import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/Homepage';
import CommunityDashboard from './components/community/CommunityDashboard';
import { Routes, Route } from 'react-router-dom';
import CommunityFeed from './components/community/CommunityFeed';

function App() {
  return (
    <div className="bg-canvas min-h-screen">
      <Navbar />
      <div className="pt-[48px]">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage />
            }
          />
          <Route path="/c/:id" element={<CommunityDashboard />}>
            <Route path="" element={<CommunityFeed />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
