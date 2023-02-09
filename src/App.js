import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/Homepage';
import CommunityDashboard from './components/community/CommunityDashboard';
import { Routes, Route } from 'react-router-dom';
import CommunityFeed from './components/community/CommunityFeed';
import Post from './components/post/Post';
import PostForm from './components/PostForm';
import Login from './components/Login';

function App() {
  return (
    <div className="bg-canvas min-h-screen">
      <Navbar />
      <div className="pt-[48px]">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="submit" element={<PostForm />} />
          <Route path="login" element={<Login />} />
          <Route path="c/:community_id" element={<CommunityDashboard />}>
            <Route index element={<CommunityFeed />} />
            <Route path="posts/:post_id" element={<Post />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
