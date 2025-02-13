import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavigation from "../Shared/MainNavigation";
import ProfilePage from "../Pages/ProfilePage";
import VideoPage from "../Pages/VideoPage";
import MainPage from "../Pages/MainPage";

const RoutingMain = () => {
  return (
    <BrowserRouter>
      <header>
        <MainNavigation />
      </header>

      <main className="container">
        <Routes>
          <Route path="main" element={<MainPage />} />
          <Route path="video" element={<VideoPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default RoutingMain;
