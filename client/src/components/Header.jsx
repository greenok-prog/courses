import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import AuthorizationLinks from "./Navbar/AuthorizationLinks";
import ProfileLinks from "./Navbar/ProfileLinks";

function Header({ isAuth, authChange }) {
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
            <Nav className="me-auto mb-lg-0"></Nav>
            {!isAuth ? (
              <AuthorizationLinks />
            ) : (
              <ProfileLinks authChange={authChange} />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
