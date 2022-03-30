import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardList from "../components/CardList";
import UsersCardList from "../components/Education/UsersCardList";
import EducationLinks from "../components/Education/EducationLinks";

function Education() {
  const { currentUser } = useSelector((state) => state.user);
  const { cards } = useSelector((state) => state.course);

  const [activeItem, setActiveItem] = useState("learning");
  const favorite = cards.filter((card) =>
    currentUser.user.favoriteCourses.includes(card._id)
  );

  return (
    <>
      <div className="education">
        <div className="container education_inner">
          <div className="education_header">
            <h2 className="education_header__title">Мое обучение</h2>
            <EducationLinks
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>
        </div>
      </div>
      <div className="container-lg">
        {activeItem === "learning" ? (
          <UsersCardList purchasedCourses={currentUser.user.purchasedCourses} />
        ) : (
          <CardList cards={favorite} />
        )}
      </div>
    </>
  );
}

export default Education;
