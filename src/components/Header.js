import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const [show, setShow] = useState(false);
  const handleSth = (e)=> {setShow(!show)};

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input checked={show} onClick={handleSth} type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <NavLink to="/">
            <li onClick={handleSth}>Home</li>
          </NavLink>
          <NavLink to="/register">
            <li onClick={handleSth}>Register</li>
          </NavLink>
          <NavLink to="/login">
            <li onClick={handleSth}>Login</li>
          </NavLink>
          <NavLink to="/erstellen">
            <li onClick={handleSth}>Event erstellen</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
