import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyPortfolio</Link>
      </div>
      <ul className="nav-links">
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
