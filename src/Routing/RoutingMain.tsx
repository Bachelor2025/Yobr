import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavigation from "../Shared/MainNavigation";
import StartPage from "../Pages/StartPage";
import FilePage from "../Pages/FilePage";

const RoutingMain = () => {
  return (
    <BrowserRouter>
      <header>
        <MainNavigation />
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<h1> Hksns </h1>} />
          <Route path="files" element={<FilePage />} />
          <Route path="start" element={<StartPage />} />
          <Route path="comments" element={<h1>Test</h1>} />
          <Route path="calendar" element={<h1>Test</h1>} />
          <Route path="settings" element={<h1>Test</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default RoutingMain;
