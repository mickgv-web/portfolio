// components/Footer.jsx
function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} — Miguel García</p>
        <div className="footer-status">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>
        <div className="footer-links">
          <a href="mailto:tuemail@ejemplo.com">Email</a>
          <a href="https://linkedin.com/in/tuuser">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;