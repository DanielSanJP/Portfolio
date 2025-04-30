import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">MyPortfolio</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
