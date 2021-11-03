import React from "react";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <div>
      <nav className="navbar navbar-custom navbar-expand-lg navbar-dark py-3">
        <div className="container-sm">
          <Link className="navbar-brand text-dark" to="/">
            FrizCourses
          </Link>
          <form action="" className="fortm-inline">
            <Link to="/login" className="btn btn-outl mx-2">
              Вход
            </Link>
            <Link to="/registration" className="btn btn-filled">
              Регистрация
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
