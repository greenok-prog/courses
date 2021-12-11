import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalMessage from "../components/Modal/ModalMessage";
import Loader from "../components/UI/Loader";

function CourseInfo() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(false);
  const { currentPromo } = useSelector((state) => state.course);
  const { favorite, isAuth } = useSelector((state) => state.user);

  const [promo, setPromo] = useState();
  useEffect(() => {
    if (currentPromo !== null) {
      setPromo(currentPromo.coursePromo);
      localStorage.setItem(
        "currentPromo",
        JSON.stringify(currentPromo.coursePromo)
      );
    } else {
      const localPromo = JSON.parse(localStorage.getItem("currentPromo"));
      setPromo(localPromo);
    }
  }, []);
  useEffect(() => {
    return () => {
      localStorage.setItem(
        "currentPromo",
        JSON.stringify(currentPromo.coursePromo)
      );
    };
  }, [currentPromo.coursePromo]);
  // console.log(promo);
  // const { title, subtitle, description, willLearn, price, img } = promo;
  const checkAuth = (action) => {
    if (isAuth === false) {
      setErrorMessage(true);
    } else {
      dispatch(action);
    }
  };
  return (
    <div className="courseInfo__header">
      {promo ? (
        <div className="container-lg courseInfo_title ">
          <ModalMessage
            title="Ошибка"
            message="Сначала зайдите в аккаунт"
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          <div className="row d-flex justify-content-center">
            <div className="courseInfo_title-text col-8">
              <div className="courseInfo_text">
                <h3>{promo.title}</h3>
                <p>{promo.subtitle}</p>
              </div>
              <div className="aboutCourse">
                <p className="aboutCourse_title">Чему вы научитесь:</p>
                <ul className="aboutCourse_list row">
                  {promo.willLearn.map((el, index) => (
                    <li className="aboutCourse_list-item col-6" key={index}>
                      <img src="/images/done.png" alt="" />
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="courseInfo_description">
                <p className="courseInfo_description-title">Описание</p>
                {promo.description.map((el, index) => (
                  <p className="courseInfo_description-text" key={index}>
                    {el}
                  </p>
                ))}
              </div>
            </div>
            <div className="courseInfo_card col-3">
              <img
                className="courseInfo_card__image"
                src={`/images/${promo.img}`}
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
                  <li className="courseInfo_card__list-item">
                    <img src="/images/task.png" alt="" />
                    Задания
                  </li>
                </ul>
              </div>
              <div className="courseInfo_card__footer d-flex justify-content-between">
                <button
                  className="courseInfo_card-buy"
                  onClick={() =>
                    checkAuth({
                      type: "ADD_TO_PURCHASED",
                      payload: promo,
                    })
                  }
                >
                  Купить сейчас
                </button>
                {favorite && !favorite.includes(currentPromo) ? (
                  <button
                    className="courseInfo_card-like"
                    onClick={() =>
                      checkAuth({
                        type: "ADD_TO_FAVORITE",
                        payload: currentPromo,
                      })
                    }
                  >
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
                  <button
                    className="courseInfo_card-like"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVORITE",
                        payload: currentPromo.id,
                      })
                    }
                  >
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
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default CourseInfo;
