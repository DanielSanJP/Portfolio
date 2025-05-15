import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-profile">
        <img src="/DogPicture.png" alt="Profile" className="profile-picture" />
        <div className="bio-cards">
          <div className="bio-card">
            <p className="bio">
              Hi, I am Daniel Medcalf, a developer based in New Zealand,
              currently studying Software Development at Toi Ohomai. I
              specialize in building modern web applications using React,
              Node.js, and databases like PostgreSQL and MongoDB. My experience
              includes frontend and backend development, version control with
              GitHub, and deploying apps on platforms like Vercel and Railway.
              Living with Duchenne Muscular Dystrophy has taught me resilience,
              adaptability, and a passion for learning—qualities I bring to
              every project. I am eager to contribute, collaborate, and create
              impactful software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
