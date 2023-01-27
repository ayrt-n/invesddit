import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/Homepage';
import CommunityHomepage from './components/community/CommunityHomepage';
import { Routes, Route } from 'react-router-dom';

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
          <Route
            path="/c/:id"
            element={<CommunityHomepage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
