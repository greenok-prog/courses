import React from "react";
import { useSelector } from "react-redux";
import CardList from "../CardList";

function Recomendation() {
  const { cards } = useSelector((state) => state.course);
  const popularCards = cards.sort((a, b) => (a.popular < b.popular ? 1 : -1));
  const slicedPopularCards = popularCards.slice(0, 3);

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
          <CardList cards={slicedPopularCards} />
        </div>
      </div>
    </div>
  );
}

export default Recomendation;
