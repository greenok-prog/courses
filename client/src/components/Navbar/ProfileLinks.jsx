import React from "react";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/actions/user";
function ProfileLinks() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isAdmin = currentUser?.user?.roles[0] === "ADMIN";
  return (
    <div>
      <ul className="navbar-nav">
        {isAdmin ? (
          <li className="nav-item">
            <NavLink className="nav-link active" to="/admin">
              Админ панель
            </NavLink>
          </li>
        ) : (
          <li className="nav-item">
            <NavLink className="nav-link active" to="/education">
              Мое обучение
            </NavLink>
          </li>
        )}

        <li className="nav-item">
          <NavDropdown title="Профиль" className="nav-dropdown">
            <NavLink className="navbarDropdown-item" to="/profile">
              Мой профиль
            </NavLink>

            <NavLink className="navbarDropdown-item" to="/education">
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
