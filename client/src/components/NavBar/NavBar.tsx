import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-items">
          <a href="#intoducing-main">Présentation</a>
        </li>
        <li className="nav-items">
          <a href="#hard-kills-main">Hard Skills</a>{" "}
        </li>

        <li className="nav-items">Soft Skills</li>
        <li className="nav-items">Projets</li>
      </ul>
    </nav>
  );
}

export default NavBar;
