import { Link } from "react-router-dom";
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
    <nav className="yobr-primary-bg-color yobr-white-text-color d-flex flex-column vh-50 p-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="yobr-white-text-color yobr-hover-color nav-link" to="start">
            <RiRobot2Line /> Ai
          </Link>
        </li>
        <li className="nav-item">
          <Link className="yobr-white-text-color yobr-hover-color nav-link" to="files">
            <IoFolderOutline className="me-2" /> Files
          </Link>
        </li>
        <li className="nav-item">
          <Link className="yobr-white-text-color yobr-hover-color nav-link" to="files">
            <MdOutlineEventNote className="me-2" /> Comments
          </Link>
        </li>
        <li className="nav-item">
          <Link className="yobr-white-text-color yobr-hover-color nav-link" to="files">
            <IoCalendarOutline className="me-2" /> Calendar
          </Link>
        </li>
        <li className="nav-item">
          <Link className="yobr-white-text-color nav-link yobr-hover-color" to="files">
            <IoSettingsOutline className="me-2" /> Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
