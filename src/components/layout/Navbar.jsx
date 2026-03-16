import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <h2 className="logo">MG</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;