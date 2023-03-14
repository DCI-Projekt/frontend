import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/register">
            <li>Register</li>
          </NavLink>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
