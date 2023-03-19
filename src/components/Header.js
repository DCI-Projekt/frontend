import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

const Header = () => {
  let status = useContext(UserContext);

  let location = useLocation()
  let isNotHome = (location.pathname !== '/')
  let isNotLogin = (location.pathname !== '/login')
  let isNotRegister = (location.pathname !== '/register')

  const [show, setShow] = useState(false);

  const handleSth = (e) => {
    if (e.target.value === 0) {
      setShow(false);
    } else setShow(!show);
  };

let isAdmin = status.message === "admin";
let createEvent = isAdmin ? 
(<NavLink to="/erstellen">
    <li onClick={handleSth}>Event erstellen</li>
  </NavLink>
) : "";

let showHomeNav = isNotHome ? 
(<NavLink to="/">
  <li onClick={handleSth}>Home</li>
</NavLink>) : '';

let showLoginPath = isNotLogin ? 
(<NavLink to="/login">
<li onClick={handleSth}>Login</li>
</NavLink>) : '';

let showRegisterPath = isNotRegister ? 
(<NavLink to="/register">
<li onClick={handleSth}>Register</li>
</NavLink>) : '';

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input checked={show} onClick={handleSth} readOnly type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          {showHomeNav}
          {showRegisterPath}
          {showLoginPath}
          {createEvent}
        </ul>
      </div>
      <div className="navbar-desktop">
        {showHomeNav}
        {showRegisterPath}
        {showLoginPath}
        {createEvent}
      </div>
    </nav>
  );
};

export default Header;
