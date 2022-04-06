import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalMessage from "../components/Modal/ModalMessage";
import Loader from "../components/UI/Loader";
import AboutCourseList from "../components/CourseInfo/AboutCourseList";
import PromoDescription from "../components/CourseInfo/PromoDescription";
import PromoCard from "../components/CourseInfo/PromoCard";
import { getCardPromo, getCardPromoAction } from "../store/actions/cards";
import MyToast from "../components/UI/MyToast";
import ErrorToast from "../components/UI/ErrorToast";

function CourseInfo() {
  const params = useParams();
  const [first, setfirst] = useState("");
  const dispatch = useDispatch();
  const { cards, currentPromo } = useSelector((state) => state.course);
  const { isMessage, isError } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCardPromo(params.id));

    const card = cards.find((el) => el._id === params.id);
    setfirst(card?.image);
    return () => {
      dispatch(getCardPromoAction({}));
    };
  }, [cards, dispatch, params.id]);
  console.log(currentPromo.willLearn);
  const [errorMessage, setErrorMessage] = useState(false);
  return (
    <div className="courseInfo__header">
      {isMessage && <MyToast />}
      {isError && <ErrorToast />}
      {currentPromo ? (
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
                <h3>{currentPromo.title}</h3>
                <p>{currentPromo.subtitle}</p>
              </div>
              <div className="aboutCourse">
                <p className="aboutCourse_title">Чему вы научитесь:</p>
                {currentPromo.willLearn && (
                  <AboutCourseList list={currentPromo.willLearn} />
                )}
              </div>
              {currentPromo.description && (
                <PromoDescription description={currentPromo.description} />
              )}
            </div>
            {first !== "" ? (
              <PromoCard
                promo={currentPromo}
                image={first}
                setErrorMessage={setErrorMessage}
              />
            ) : (
              <div>Loading</div>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default CourseInfo;
