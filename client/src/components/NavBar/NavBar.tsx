import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Link to="/">
          <li className="nav-items">Présentation</li>
        </Link>
        <li className="nav-items">Hard Skills</li>
        <li className="nav-items">Soft Skills</li>
        <li className="nav-items">Projets</li>
      </ul>
    </nav>
  );
}

export default NavBar;
