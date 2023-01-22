import React from 'react';
import MainFeed from './components/MainFeed';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-canvas min-h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <MainFeed />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
