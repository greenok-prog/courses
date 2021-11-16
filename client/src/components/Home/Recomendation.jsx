import React from "react";
import CardList from "../CardList";

function Recomendation({ cards }) {
  return (
    <div>
      <div className="fast_courses">
        <div className="fast_courses_inner container-lg justify-content-center text-center">
          <h4 className="fast_courses_title">
            Курсы, которые можно пройти за день
          </h4>
          <p className="fast_courses_subtitle">
            Более 4000 курсов по таким темам, как бизнес-аналитика, графический
            дизайн, Python и прочим.
          </p>
          <CardList cards={cards} />
        </div>
      </div>
    </div>
  );
}

export default Recomendation;
