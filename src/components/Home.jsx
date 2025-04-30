import React from "react";
import "../styles/Home.css";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="home">
      {/* Top Navigation Bar */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Daniel Medcalf – Full Stack Developer</h1>
          <p>Building innovative and scalable web applications</p>
          <div className="cta-buttons">
            <a href="/about" className="btn">
              About Me
            </a>
            <a href="/portfolio" className="btn">
              View Portfolio
            </a>
            <a href="/contact" className="btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
