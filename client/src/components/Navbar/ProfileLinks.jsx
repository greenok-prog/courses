import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <NavDropdown.Item>
              <Link to="/profile/1" className="dropdown_link">
                Мой профиль
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="/education/1">
              Мое обучение
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Сообщения</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => authChange(false)}>
              Выход
            </NavDropdown.Item>
          </NavDropdown>
        </li>
      </ul>
    </div>
  );
}

export default ProfileLinks;
