import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavigation from "../Shared/MainNavigation";
import StartPage from "../Pages/StartPage";
import App from "../App";
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
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default RoutingMain;
