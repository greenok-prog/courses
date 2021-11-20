import React from "react";
import { NavLink } from "react-router-dom";
function AuthorizationLinks({ setIsAuth, isAuth }) {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink
          onClick={() => setIsAuth(false)}
          className="nav-link active"
          to="/registration"
        >
          Регистрация
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" to="/login">
          Вход
        </NavLink>
      </li>
    </ul>
  );
}

export default AuthorizationLinks;
