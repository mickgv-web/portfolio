import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Detecta la sección cuando está en la parte superior
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observamos todas las secciones que tengan un ID
    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h2 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          MG<span>.dev</span>
        </h2>

        <div className="nav-links">
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
            Projects
          </a>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;