import React from "react";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
function ProfileLinks() {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/registration">
            Мое обучение
          </NavLink>
        </li>
        <li className="nav-item">
          <NavDropdown title="Профиль" className="nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Мой профиль</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Мое обучение</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Сообщения</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Выход</NavDropdown.Item>
          </NavDropdown>
        </li>
      </ul>
    </div>
  );
}

export default ProfileLinks;
