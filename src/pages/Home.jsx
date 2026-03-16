import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <Motion.section
      className="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Miguel García</h1>

      <h2 className="hero-subtitle">
        Web Developer
      </h2>

      <p className="hero-description">
        Building web applications and experimenting with
        modern frontend and backend technologies.
      </p>

      <div className="hero-actions">
        <Link to="/projects" className="btn-primary">
          View Projects
        </Link>

        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <FaGithub />
          Github
        </a>

        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </Motion.section>
  );
}

export default Home;