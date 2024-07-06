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
import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';
import RecoverPassword from './components/RecoverPassword';
import PublicRoute from './components/common/PublicRoute';
import PrivateRoute from './components/common/PrivateRoute';
import AuthProvider from './contexts/authentication/AuthProvider';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <AuthProvider>
      <AccountProvider>
        <ModalProvider>
          <Routes>
            {/* Regular Routes - Includes both public and private routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Homepage />} />
              <Route path="c/:community_id" element={<CommunityDashboard />}>
                <Route index element={<CommunityFeed />} />
                <Route path="posts/:post_id" element={<Post />} />
              </Route>
              <Route path="profile/:username" element={<Profile />} />
              <Route path="search" element={<SearchResults />} />
              <Route
                path="submit"
                element={
                  <PrivateRoute>
                    <CreatePostPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="communities/new"
                element={
                  <PrivateRoute>
                    <CreateCommunityPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="c/:community_id/settings"
                element={
                  <PrivateRoute>
                    <CommunitySettings />
                  </PrivateRoute>
                }
              />
              <Route
                path="profile/settings"
                element={
                  <PrivateRoute>
                    <ProfileSettings/>
                  </PrivateRoute>
                }
              />
              <Route
                path="notifications"
                element={
                  <PrivateRoute>
                    <NotificationDashboard />
                  </PrivateRoute>
                }
              />
            </Route>

            {/* Routes related to authentication which require different layout */}
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
              <Route
                path="verify-account"
                element={
                  <PublicRoute>
                    <VerifyAccount />
                  </PublicRoute>
                }
              />
              <Route
                path="reset-password"
                element={
                  <PublicRoute>
                    <ResetPassword />
                  </PublicRoute>
                }
              />
            </Route>
          </Routes>
        </ModalProvider>
      </AccountProvider>
    </AuthProvider>
  );
}

export default App;
