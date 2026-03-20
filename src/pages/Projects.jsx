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
    <div>
      <h2>Projects</h2>
      <Motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Motion.div>
    </div>
  );
}

export default Projects;