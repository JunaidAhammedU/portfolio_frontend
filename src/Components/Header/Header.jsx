import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-transparent">
        <div className="flex-1 ">
          <a className="btn btn-ghost text-xl">Portfolio</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 hover:bg-transparent">
            <Link to={"/"}>
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to={"/about"}>
              <li>
                <a>About</a>
              </li>
            </Link>
            <Link to={"/contact"}>
              <li>
                <a>Contact</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
