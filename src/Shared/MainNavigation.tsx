import { NavLink } from "react-router-dom";
import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { BsPersonWheelchair } from "react-icons/bs";

const MainNavigation = () => {
  return (
    <nav className="yobr-primary-bg-color yobr-white-text-color d-flex flex-column vh-50 p-3 sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            className="yobr-white-text-color yobr-hover-color nav-link"
            to="main"
          >
            <RiRobot2Line /> Main
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="yobr-white-text-color yobr-hover-color nav-link"
            to="video"
          >
            <IoVideocamOutline className="me-2" /> Video
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="yobr-white-text-color yobr-hover-color nav-link"
            to="profile"
          >
            <BsPersonWheelchair className="me-2" /> Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
