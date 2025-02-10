import { Link } from "react-router-dom";
import React from "react";

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="start">Start</Link>
        </li>
        <li>
          <Link to="files">Filer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
