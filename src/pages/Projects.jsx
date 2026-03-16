import { motion as Motion } from "framer-motion";
import projects from "../data/es/projects.json";
import ProjectCard from "../components/ProjectCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <Motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Motion.div>
    </section>
  );
}

export default Projects;