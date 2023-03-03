import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/Homepage';
import CommunityDashboard from './components/community/CommunityDashboard';
import { Routes, Route } from 'react-router-dom';
import CommunityFeed from './components/community/CommunityFeed';
import Post from './components/post/Post';
import Login from './components/Login';
import CommunitySettings from './components/community/CommunitySettings';
import AuthProvider from './contexts/authentication/AuthProvider';
import CreatePostPage from './components/CreatePostPage';
import ProfileSettings from './components/profile/ProfileSettings';
import Profile from './components/profile/Profile';

function App() {
  return (
    <AuthProvider>
      <div className="bg-canvas min-h-screen">
        <Navbar />
        <div className="pt-[48px]">
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="submit" element={<CreatePostPage />} />
            <Route path="login" element={<Login />} />
            <Route path="c/:community_id" element={<CommunityDashboard />}>
              <Route index element={<CommunityFeed />} />
              <Route path="posts/:post_id" element={<Post />} />
            </Route>
            <Route path="c/:community_id/settings" element={<CommunitySettings />} />
            <Route path="profile/settings" element={<ProfileSettings/>} />
            <Route path="profile/:username" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
