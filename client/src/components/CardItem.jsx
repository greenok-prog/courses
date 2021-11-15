import React from "react";
import { Link } from "react-router-dom";
function CardItem({ title, text, img }) {
  return (
    <div className="col-lg-4 col-sm-12 card">
      <img className="card-img-top" src={`./${img}`} alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <small className="card-text">{text}</small>
      </div>
      <div className="more container d-flex justify-content-between">
        <img
          className="favorite"
          src="./favorite_black_24dp 1.png"
          alt=""
        ></img>
        <div className="more-link">
          <Link to="" className="more-text">
            Подробнее
            <img className="arrow" src="./Arrow 1.png" alt=""></img>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
