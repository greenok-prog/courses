import React from "react";
import { Link } from "react-router-dom";
import config from "../../config/default.json";
function UsersCardItem({ title, text, image, id }) {
  const { API_SERVER } = config;

  return (
    <Link to={`/lesson/${id}`} className="col-lg-4 col-sm-12 card my-card">
      <img className="card-img-top" src={API_SERVER + image} alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <small className="card-text">{text}</small>
      </div>
    </Link>
  );
}

export default UsersCardItem;
