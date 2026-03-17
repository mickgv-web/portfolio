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
      {/* IMAGE */}
      <img
        src={project.image || "/images/placeholder.jpg"}
        alt={project.name}
        className="project-image"
      />

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
        {/* GITHUB */}
        {project.github &&
          (Array.isArray(project.github) ? (
            project.github.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                title={repo.label}
              >
                <FaGithub />
              </a>
            ))
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          ))}

        {/* DEMO */}
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