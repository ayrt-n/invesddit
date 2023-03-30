import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Layout from './components/Layout';
import AuthLayout from './components/AuthLayout';
import RecoverPassword from './components/RecoverPassword';
import PublicRoute from './components/common/PublicRoute';

function App() {
  return (
    <AccountProvider>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="submit" element={<CreatePostPage />} />
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
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="forgot-password"
              element={
                <PublicRoute>
                  <RecoverPassword />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      </ModalProvider>
    </AccountProvider>
  );
}

export default App;
