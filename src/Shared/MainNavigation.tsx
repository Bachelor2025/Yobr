import { NavLink } from "react-router-dom";
import React from "react";
import {
  IoCalendarOutline,
  IoFolderOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { MdOutlineEventNote } from "react-icons/md";

const MainNavigation = () => {
  return (
    <nav className="yobr-primary-bg-color yobr-white-text-color d-flex flex-column vh-100 p-3 sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            className="yobr-white-text-color yobr-hover-color nav-link"
            to="start"
          >
            <RiRobot2Line /> Ai Test
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

        <li className="nav-item">
          <NavLink
            className="yobr-white-text-color yobr-hover-color nav-link"
            to="comments"
          >
            <MdOutlineEventNote className="me-2" /> Comments
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="yobr-white-text-color yobr-hover-color nav-link"
            to="calendar"
          >
            <IoCalendarOutline className="me-2" /> Calendar
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="yobr-white-text-color nav-link yobr-hover-color"
            to="settings"
          >
            <IoSettingsOutline className="me-2" /> Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
