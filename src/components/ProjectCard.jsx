import { motion as Motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

function ProjectCard({ project }) {
  return (
    <Motion.div
      className="project-card"
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      {/* IMAGE */}
      <div className="project-image-wrapper">
        <img
          src={project.image}
          className="project-image base"
          alt=""
        />

        {project.overlay && (
          <div className="overlay-mask">
            <img
              src={project.overlay}
              className="overlay-image"
              alt=""
            />
          </div>
        )}
      </div>

      {/* TITLE */}
      <h3>{project.name}</h3>

      {/* DESCRIPTION */}
      <p>{project.description}</p>

      {/* TECH */}
      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {/* LINKS */}
      <div className="project-links">
        {project.github &&
          (Array.isArray(project.github) ? (
            project.github.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-link"
              >
                <FaGithub />
                <span>{repo.label}</span>
              </a>
            ))
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          ))}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            <FiExternalLink />
          </a>
        )}
      </div>
    </Motion.div>
  );
}

export default ProjectCard;