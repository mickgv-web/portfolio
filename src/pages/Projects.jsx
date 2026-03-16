import projects from "../data/es/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;