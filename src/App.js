import React from 'react';
import FrontpageFeed from './components/FrontpageFeed';
import Navbar from './components/navbar/Navbar';
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
              <FrontpageFeed />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
