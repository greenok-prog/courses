import React from "react";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
function ProfileLinks({ authChange }) {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/education/1">
            Мое обучение
          </NavLink>
        </li>
        <li className="nav-item">
          <NavDropdown title="Профиль" className="nav-dropdown">
            <NavLink className="navbarDropdown-item" to="/profile/1">
              Мой профиль
            </NavLink>

            <NavLink className="navbarDropdown-item" to="/education/1">
              Мое обучение
            </NavLink>

            <NavDropdown.Divider />
            <NavLink
              className="navbarDropdown-item"
              to="/"
              onClick={() => authChange(false)}
            >
              Выход
            </NavLink>
          </NavDropdown>
        </li>
      </ul>
    </div>
  );
}

export default ProfileLinks;
