import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/Homepage';
import CommunityDashboard from './components/community/CommunityDashboard';
import CommunityFeed from './components/community/CommunityFeed';
import Post from './components/post/Post';
import Login from './components/Login';
import CommunitySettings from './components/community/CommunitySettings';
import CreatePostPage from './components/CreatePostPage';
import ProfileSettings from './components/profile/ProfileSettings';
import Profile from './components/profile/Profile';
import AccountProvider from './contexts/account/AccountProvider';
import CreateCommunityPage from './components/community/CreateCommunityPage';
import SignUp from './components/SignUp';
import VerifyAccount from './components/VerifyAccount';
import ModalProvider from './contexts/modal/ModalProvider';
import SearchResults from './components/search/SearchResults';
import NotificationDashboard from './components/notifications/NotificationDashboard';

function App() {
  return (
    <AccountProvider>
      <ModalProvider>
        <div className="bg-canvas min-h-screen font-sans">
          <Navbar />
          <div className="pt-[48px]">
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="submit" element={<CreatePostPage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="verify-account" element={<VerifyAccount />} />
              <Route path="communities/new" element={<CreateCommunityPage />} />
              <Route path="c/:community_id" element={<CommunityDashboard />}>
                <Route index element={<CommunityFeed />} />
                <Route path="posts/:post_id" element={<Post />} />
              </Route>
              <Route path="c/:community_id/settings" element={<CommunitySettings />} />
              <Route path="profile/settings" element={<ProfileSettings/>} />
              <Route path="profile/:username" element={<Profile />} />
              <Route path="search" element={<SearchResults />} />
              <Route path="notifications" element={<NotificationDashboard />} />
            </Routes>
          </div>
        </div>
      </ModalProvider>
    </AccountProvider>
  );
}

export default App;
