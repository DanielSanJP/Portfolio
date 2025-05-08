import { useState, useEffect } from "react";
import "../styles/Portfolio.css";

const projects = [
  {
    id: 1,
    image: "/socialapplogo.png",
    title: "Social App",
    description: "My attempt at building a social media app.",
    techStack: ["React", "CSS", "JavaScript", "Supabase", "Vercel", "Railway"],
    liveDemo: "https://social-app-omega-pied.vercel.app/",
    github: "https://github.com/DanielSanJP/Social-App",
  },
  {
    id: 2,
    image: "/src/assets/react.svg",
    title: "Project Two",
    description: "A brief description of Project Two.",
    techStack: ["React", "Node.js", "MongoDB"],
    liveDemo: "https://example.com/project-two",
    github: "https://github.com/example/project-two",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => openModal(project)}>Learn More</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <h4>Tech Stack:</h4>
            <ul>
              {selectedProject.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="modal-links">
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
