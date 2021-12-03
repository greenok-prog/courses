import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CardItem(props) {
  const dispatch = useDispatch();

  return (
    <div className="col-lg-4 col-sm-12 card">
      <img
        className="card-img-top"
        src={`/images/${props.card.img}`}
        alt=""
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.card.title}</h5>
        <small className="card-text">{props.card.text}</small>
      </div>
      <div className="more container d-flex justify-content-between">
        <svg
          onClick={() =>
            dispatch({ type: "ADD_TO_FAVORITE", payload: props.card.id })
          }
          className={`favorite ${props.card.favorite ? "favorite-active" : ""}`}
          width="20"
          height="19"
          viewBox="0 0 20 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.88659 16.6603L8.88587 16.6596C6.30081 14.3155 4.19567 12.4057 2.73078 10.6147C1.27162 8.83074 0.5 7.22576 0.5 5.5C0.5 2.69614 2.69614 0.5 5.5 0.5C7.08861 0.5 8.62112 1.24197 9.61932 2.41417L10 2.8612L10.3807 2.41417C11.3789 1.24197 12.9114 0.5 14.5 0.5C17.3039 0.5 19.5 2.69614 19.5 5.5C19.5 7.22577 18.7284 8.83077 17.2691 10.6161C15.8065 12.4055 13.7058 14.3144 11.1265 16.6583L11.1148 16.669L11.1137 16.67L10.0013 17.675L8.88659 16.6603Z"
            stroke="white"
          />
        </svg>
        <div className="more-link">
          <Link to="/course/1" className="more-text">
            Подробнее
            <img className="arrow" src={"/images/arrow.png"} alt=""></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
