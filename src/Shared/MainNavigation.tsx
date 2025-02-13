import { NavLink } from "react-router-dom";
import React from "react";
import { IoFolderOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";

const MainNavigation = () => {
  return (
    <nav className="yobr-primary-bg-color yobr-white-text-color d-flex flex-column vh-50 p-3 sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            className="yobr-white-text-color yobr-hover-color nav-link"
            to="start"
          >
            <RiRobot2Line /> Video
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="yobr-white-text-color yobr-hover-color nav-link"
            to="files"
          >
            <IoFolderOutline className="me-2" /> Files
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
