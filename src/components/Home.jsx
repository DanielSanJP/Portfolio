import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Top Navigation Bar */}

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Hi I am Daniel Medcalf</h1>
          <p>Building creative and scalable web applications</p>
          <div className="cta-buttons">
            <a href="#portfolio" className="btn">
              View my Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
