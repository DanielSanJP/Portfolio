import "../styles/App.css";
import "../styles/Nav.css";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <li className="logo">
        <a href="#home" className="nav-name" style={{ color: "white" }}>
          Daniel M
        </a>
        <a href="#home"> MyPortfolio</a>
      </li>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
        <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
        <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </div>
    </nav>
  );
};

export default Nav;
