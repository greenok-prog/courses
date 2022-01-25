import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions/user";
function ProfileLinks() {
  const dispatch = useDispatch();

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
            <NavLink className="navbarDropdown-item" to="/profile">
              Мой профиль
            </NavLink>

            <NavLink className="navbarDropdown-item" to="/education/1">
              Мое обучение
            </NavLink>

            <NavDropdown.Divider />
            <NavLink
              className="navbarDropdown-item"
              to="/"
              onClick={() => dispatch(logoutAction())}
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
