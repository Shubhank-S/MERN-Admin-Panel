import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav>
        <ul className="header_links">
          <li>
            <NavLink to="/" className="header_link" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/register" className="header_link">Register</NavLink>
          </li>
          <li>
            <NavLink className="header_link">Home</NavLink>
          </li>
          <li>
            <NavLink className="header_link">Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
