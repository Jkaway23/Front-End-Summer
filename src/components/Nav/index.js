import React from "react";
import Logo from "../Logo";
import MiniLogo from "../MiniLogo";

const Nav = () => {
  return (
    <nav>
      <Logo />
      <MiniLogo />
      <ul>
        <li>
          <a href="#1">
            <i className="fa fa-home"></i> <em>Home</em>
          </a>
        </li>
        <li>
          <a href="#2">
            <i className="fa fa-user"></i> <em>About Me</em>
          </a>
        </li>
        <li>
          <a href="#3">
            <i className="fa fa-pencil"></i> <em>Entries</em>
          </a>
        </li>
        <li>
          <a href="#4">
            <i className="fa fa-envelope"></i> <em>Contact</em>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
