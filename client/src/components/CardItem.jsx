import React, { useState } from "react";

import { Link } from "react-router-dom";

import ModalMessage from "./Modal/ModalMessage";
import config from "../config/default.json";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../store/actions/cards";

function CardItem(props) {
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const serverApi = config.API_SERVER;

  const { currentUser } = useSelector((state) => state.user);
  const isAdmin = currentUser?.user?.roles[0] === "ADMIN";
  const hasRights = isAdmin || props.card?.author === currentUser?.user?._id;

  return (
    <div className="col-lg-4 col-sm-12 card mb-3">
      <>
        <img
          className="card-img-top"
          src={serverApi + props.card.image}
          alt=""
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.card.title}</h5>
          <small className="card-text">{props.card.text}</small>
        </div>
        <div className="more container d-flex justify-content-between align-items-center ">
          <ModalMessage
            title="Ошибка"
            message="Сначала зайдите в аккаунт"
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          {hasRights && (
            <>
              <button className="btn more-text">
                <Link to={`/card/${props.card._id}/change`}>Изменить</Link>
              </button>
              <button
                onClick={() => dispatch(removeCard(props.card._id))}
                className="btn more-text"
              >
                Удалить
              </button>
            </>
          )}
          <div className="more-link d-flex ">
            <Link to={`/card/${props.card._id}`} className="more-text mr-5">
              Подробнее
              <img className="arrow" src={"/images/arrow.png"} alt=""></img>
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}

export default CardItem;
