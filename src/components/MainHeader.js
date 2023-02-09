import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <nav>
        <div className="log">Logo</div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default MainHeader;
