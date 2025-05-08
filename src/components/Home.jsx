import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Top Navigation Bar */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Daniel Medcalf</h1>
          <h1>Full Stack Developer</h1>
          <p>Building creative and scalable web applications</p>
          <div className="cta-buttons">
            <Link to="/about" className="btn">
              About Me
            </Link>
            <Link to="/portfolio" className="btn">
              View Portfolio
            </Link>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
