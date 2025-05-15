import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
  faGithub,
  faJsSquare,
  faHtml5,
  faFigma,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";
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
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills" id="skills">
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
          <div className="skill-card">
            <FontAwesomeIcon icon={faMicrosoft} className="skill-badge" />
            <p className="skill-title">Microsoft Apps</p>
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
}

export default Skills;
