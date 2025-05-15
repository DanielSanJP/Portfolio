import "../styles/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    id: 1,
    image: "/Social-App-Thumbnail.png",
    title: "Social App",
    description: "My attempt at building a social media app.",
    techStack: ["React", "CSS", "JavaScript", "Supabase", "Vercel", "Railway"],
    liveDemo: "https://social-app-omega-pied.vercel.app/",
    github: "https://github.com/DanielSanJP/Social-App",
  },
  {
    id: 2,
    image: "/Life-Catalogue-Thumbnail.png",
    title: "Life Catalogue",
    description: "A website for selling and managing aquarium fish ",
    techStack: ["React", "CSS", "JavaScript", "Supabase", "Vercel"],
    liveDemo: "https://life-catalogue.vercel.app/",
    github: "https://github.com/DanielSanJP/Life-Catalogue",
  },
  {
    id: 3,
    image: "/src/assets/react.svg",
    title: "Project 3",
    description: "A brief description of Project Two.",
    techStack: ["React", "Node.js", "MongoDB"],
    liveDemo: "https://example.com/project-two",
    github: "https://github.com/example/project-two",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Featured Projects</h2>
      <p className="portfolio-subtitle">
        Here are some of my recent projects. Each project was carefully crafted
        with attention to detail, performance, and user experience.
      </p>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <div className="project-tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
