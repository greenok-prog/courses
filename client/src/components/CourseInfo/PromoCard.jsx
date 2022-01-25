import React from "react";
import { useDispatch, useSelector } from "react-redux";

import config from "../../config/default.json";
import { addToPurchased } from "../../store/actions/user";
function PromoCard({ promo, image }) {
  const serverApi = config.API_SERVER;
  const dispatch = useDispatch();
  const { isAuth, currentUser } = useSelector((state) => state.user);

  return (
    <div className="courseInfo_card col-3">
      <img className="courseInfo_card__image" src={serverApi + image} alt="" />

      <div className="courseInfo_card__body">
        <div className="courseInfo_card__price">{promo.price}$</div>
        <p className="courseInfo_card__text">Этот курс включает:</p>
        <ul className="courseInfo_card__list">
          <li className="courseInfo_card__list-item">
            <img src="/images/inf.png" alt="" />
            Полный пожизненный доступ
          </li>
          <li className="courseInfo_card__list-item">
            <img src="/images/video.png" alt="" />
            Видеоматериалы
          </li>
          <li className="courseInfo_card__list-item">
            <img src="/images/task.png" alt="" />
            Задания
          </li>
        </ul>
      </div>
      <div className="courseInfo_card__footer d-flex justify-content-between">
        {isAuth &&
          (!currentUser.user.purchasedCourses.includes(promo.card) ? (
            <button
              onClick={() =>
                dispatch(addToPurchased(currentUser.user._id, promo.card))
              }
              className="courseInfo_card-buy"
            >
              Купить сейчас
            </button>
          ) : (
            <button disabled className="courseInfo_card-buy">
              Уже куплено
            </button>
          ))}

        {/* {favorite && !favorite.includes(promo) ? (
          <button className="courseInfo_card-like">
            <svg
              className={`favorite`}
              fill="white"
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
          </button>
        ) : (
          <button className="courseInfo_card-like">
            <svg
              className={`favorite favorite-active`}
              fill="white"
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
          </button>
        )} */}
      </div>
    </div>
  );
}

export default PromoCard;
