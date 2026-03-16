import projects from "../data/es/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div style={styles.grid}>
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

const styles = {
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  }
};

export default Projects;