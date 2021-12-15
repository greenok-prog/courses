import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalMessage from "../components/Modal/ModalMessage";
import Loader from "../components/UI/Loader";
import AboutCourseList from "../components/CourseInfo/AboutCourseList";
import PromoDescription from "../components/CourseInfo/PromoDescription";
import PromoCard from "../components/CourseInfo/PromoCard";

function CourseInfo() {
  const { cards } = useSelector((state) => state.course);

  const params = useParams();

  const [errorMessage, setErrorMessage] = useState(false);
  const [promo, setPromo] = useState();

  useEffect(() => {
    setPromo(cards.find((el) => el.id === Number(params.id)));
  }, [promo, params.id, cards]);

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
                <h3>{promo.coursePromo.title}</h3>
                <p>{promo.coursePromo.subtitle}</p>
              </div>
              <div className="aboutCourse">
                <p className="aboutCourse_title">Чему вы научитесь:</p>
                <AboutCourseList list={promo.coursePromo.willLearn} />
              </div>
              <PromoDescription list={promo.coursePromo.description} />
            </div>
            <PromoCard promo={promo} setErrorMessage={setErrorMessage} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default CourseInfo;
