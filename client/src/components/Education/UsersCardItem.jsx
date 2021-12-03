import React from "react";
import { Link } from "react-router-dom";

function UsersCardItem({ title, text, img }) {
  return (
    <Link to="/" className="col-lg-4 col-sm-12 card my-card">
      <img className="card-img-top" src={`/images/${img}`} alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <small className="card-text">{text}</small>
      </div>
    </Link>
  );
}

export default UsersCardItem;
