import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section className="hero-wrapper">
      <Motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Miguel García</h1>

        <h2 className="hero-subtitle">
          Desarrollador web con background en <span className="text-highlight">UI y frontend</span>
        </h2>

        <p className="hero-description">
          Actualmente centrado en reforzar mi base técnica y explorando
          ideas entre frontend, backend e interacción.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Ver proyectos
          </a>

          <a
            href="https://github.com/mickgv-web"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaGithub />
            Github
          </a>

          <a
            href="https://linkedin.com/in/miguelgarciavarela"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </Motion.div>
    </section>
  );
}

export default Home;