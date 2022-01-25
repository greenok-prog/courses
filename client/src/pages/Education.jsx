import React, { useState } from "react";
import { useSelector } from "react-redux";

import UsersCardList from "../components/Education/UsersCardList";
import EducationLinks from "../components/Education/EducationLinks";

function Education() {
  const { currentUser } = useSelector((state) => state.user);
  const [activeItem, setActiveItem] = useState("learning");

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
          <div>Fav</div>
        )}
      </div>
    </>
  );
}

export default Education;
