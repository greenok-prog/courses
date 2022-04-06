import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import config from "../../config/default.json";
import { addToFavorite, removeFromFavorite } from "../../store/actions/cards";
import { addToPurchased } from "../../store/actions/user";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
function PromoCard({ promo, image }) {
  const serverApi = config.API_SERVER;
  const params = useParams();
  const dispatch = useDispatch();
  const { isAuth, currentUser } = useSelector((state) => state.user);

  const addToFav = () => {
    dispatch(addToFavorite(params.id, currentUser.user._id));
  };
  const removeFromFav = () => {
    dispatch(removeFromFavorite(params.id, currentUser.user._id));
  };

  return (
    <>
      {promo && (
        <div className="courseInfo_card col-3 ">
          <img
            className="courseInfo_card__image"
            src={serverApi + image}
            alt=""
          />

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
            </ul>
          </div>
          {isAuth && !currentUser.user.favoriteCourses.includes(params.id) ? (
            <div className="px-2 justify-content-center w-100 mt-5 d-flex align-items-center">
              <button
                className="courseInfo_card-like w-100 text-center justify-content-center  d-flex align-items-center"
                onClick={addToFav}
              >
                Добавить в желаемое
              </button>
            </div>
          ) : (
            <div className="px-2 mb-2 justify-content-center w-100 mt-5 d-flex align-items-center">
              <button
                className="courseInfo_card-like w-100 text-center justify-content-center  d-flex align-items-center"
                onClick={removeFromFav}
              >
                Удалить из желаемого
              </button>
            </div>
          )}
          <div className="mt-2 d-flex justify-content-center align-items-center">
            {isAuth &&
              (!currentUser.user.purchasedCourses.includes(promo.card) ? (
                <>
                  <div className="d-flex align-items-center justify-content-center flex-row">
                    <PaypalCheckoutButton
                      cardId={params.id}
                      product={{
                        description: promo.description,
                        price: promo.price,
                      }}
                    />
                  </div>
                </>
              ) : (
                <div className="px-2 justify-content-center w-100  d-flex align-items-center">
                  <button className="courseInfo_card-like w-100 text-center justify-content-center  d-flex align-items-center">
                    Уже куплено
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PromoCard;
