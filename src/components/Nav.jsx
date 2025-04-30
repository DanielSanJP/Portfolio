import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="logo">
          <Link to="/">MyPortfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
