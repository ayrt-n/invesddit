import React from 'react';
import MainFeed from './components/MainFeed';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="bg-canvas min-h-screen">
      <Navbar />
      <MainFeed />
    </div>
  );
}

export default App;
