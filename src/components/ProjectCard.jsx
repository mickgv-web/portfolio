import { motion as Motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <Motion.div
      className="project-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <img
        src={project.image}
        alt={project.name}
        className="project-image"
      />

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink />
          </a>
        )}
      </div>
    </Motion.div>
  );
}

export default ProjectCard;