import React from "react";
import { Routes, Route } from "react-router";
import Nav from "../nav";

import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import MessagesScreen from "./messages-screen";
import ListsScreen from "./lists-screen";
import NotificationsScreen from "./notifications-screen";
import MoreScreen from "./more-screen";

import WhoToFollowList from "./who-to-follow-list";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

const store = configureStore(
  {
    reducer: {
      who: whoReducer,
      tuits: tuitsReducer,
      user: authReducer
    }
  });



function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-lg-1 col-xl-2 col-md-2 col-sm-2">
            <NavigationSidebar />
          </div>
          <div className="col-lg-7 col-xl-6 col-md col-sm">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/notifications" element={<NotificationsScreen />} />
              <Route path="/messages" element={<MessagesScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/lists" element={<ListsScreen />} />
              <Route path="/profile"element={<ProfileScreen />}/>
              <Route path="/more" element={<MoreScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/login" element={<LoginScreen />} />
            </Routes>
          </div>
          <div className="col-3 col-lg d-md-none d-none d-lg-block">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;

