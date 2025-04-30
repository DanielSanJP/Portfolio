import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
  faGithub,
  faJsSquare,
  faHtml5,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  SiMongodb,
  SiPostgresql,
  SiOpenai,
  SiPython,
  SiVercel,
  SiRailway,
  SiSupabase,
  SiBootstrap,
} from "react-icons/si";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-profile">
        <img src="/DogPicture.png" alt="Profile" className="profile-picture" />
        <div className="bio-cards">
          <div className="bio-card">
            <p className="bio">
              Hi, I'm Daniel Medcalf, a 20-year-old software developer from
              Japan, currently pursuing a degree in Software Development at Toi
              Ohomai. My journey into technology began during my time at Mount
              Maunganui College, where I developed a strong foundation in
              problem-solving and logical thinking. Since then, I have honed my
              skills in various programming languages and frameworks, with a
              particular focus on building dynamic and responsive web
              applications. Unfortunately, living with Duchenne Muscular
              Dystrophy has presented its challenges, but fortunately, it has
              also allowed me to develop resilience, adaptability, and a passion
              for learning software development skills. These qualities have
              been instrumental in my journey as a software developer, enabling
              me to approach challenges with a unique perspective and
              determination to succeed.
            </p>
          </div>
          <div className="bio-card">
            <p className="bio">
              My technical expertise includes working with modern frontend
              technologies like React, CSS, and JavaScript, as well as backend
              development using Node.js and database management with PostgreSQL,
              SQL, and MongoDB. I am proficient in using GitHub for version
              control and collaboration, ensuring efficient and organized
              workflows in team projects. Additionally, I have experience
              deploying applications using platforms like Vercel and Railway.
            </p>
            <p className="bio">
              While I may not have all the answers, I am always eager to learn
              new things and grow as a developer. I believe that continuous
              learning and adaptability are key to success in the ever-evolving
              tech industry.
            </p>
          </div>
          <div className="bio-card">
            <p className="bio">
              Beyond technical skills, I value teamwork, adaptability, and
              continuous learning. I thrive in collaborative environments where
              I can contribute to innovative solutions and grow alongside
              like-minded individuals. My goal is to create impactful software
              that enhances user experiences and solves real-world problems.
            </p>
          </div>
        </div>
      </div>
      <div className="about-skills">
        <h2>Technical Skills</h2>
        <div className="skills-badges">
          <div className="skill-card">
            <FontAwesomeIcon icon={faReact} className="skill-badge" />
            <p className="skill-title">React</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faNodeJs} className="skill-badge" />
            <p className="skill-title">Node.js</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faCss3Alt} className="skill-badge" />
            <p className="skill-title">CSS</p>
          </div>
          <div className="skill-card">
            <SiPostgresql className="skill-badge" />
            <p className="skill-title">PostgreSQL</p>
          </div>
          <div className="skill-card">
            <SiMongodb className="skill-badge" />
            <p className="skill-title">MongoDB</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faGithub} className="skill-badge" />
            <p className="skill-title">GitHub</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faJsSquare} className="skill-badge" />
            <p className="skill-title">JavaScript</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faHtml5} className="skill-badge" />
            <p className="skill-title">HTML</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faFigma} className="skill-badge" />
            <p className="skill-title">Figma</p>
          </div>
          <div className="skill-card">
            <SiOpenai className="skill-badge" />
            <p className="skill-title">ChatGPT</p>
          </div>
          <div className="skill-card">
            <SiPython className="skill-badge" />
            <p className="skill-title">Python</p>
          </div>
          <div className="skill-card">
            <SiVercel className="skill-badge" />
            <p className="skill-title">Vercel</p>
          </div>
          <div className="skill-card">
            <SiRailway className="skill-badge" />
            <p className="skill-title">Railway</p>
          </div>
          <div className="skill-card">
            <SiSupabase className="skill-badge" />
            <p className="skill-title">Supabase</p>
          </div>
          <div className="skill-card">
            <SiBootstrap className="skill-badge" />
            <p className="skill-title">Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="about-soft-skills">
        <h2>Skills & Values</h2>
        <div className="soft-skills-list">
          <li>Communication</li>
          <li>Problem-Solving</li>
          <li>Team Collaboration</li>
          <li>Adaptability</li>
        </div>
      </div>
    </div>
  );
};

export default About;
