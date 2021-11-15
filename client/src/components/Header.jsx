import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import AuthorizationLinks from "./Navbar/AuthorizationLinks";
import ProfileLinks from "./Navbar/ProfileLinks";

function Header({ isAuth }) {
  return (
    <div>
      <Navbar className="navbar navbar-dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
              FrizCourses
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Связаться с нами
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Популярные курсы
                </NavLink>
              </li>
            </Nav>
            {!isAuth ? <AuthorizationLinks /> : <ProfileLinks />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
