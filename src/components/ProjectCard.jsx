function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.github} target="_blank">Github</a>

        {project.demo && (
          <a href={project.demo} target="_blank">Demo</a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;