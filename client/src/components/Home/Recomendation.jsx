import React from "react";
import { useSelector } from "react-redux";
import CardList from "../CardList";

function Recomendation({ favoriteCards, cards }) {
  const popularCards = cards.sort((a, b) => (a.popular < b.popular ? 1 : -1));
  const slicedPopularCards = popularCards.slice(0, 3);

  return (
    <div>
      <div className="fast_courses">
        <div className="fast_courses_inner container-lg justify-content-center text-center">
          <h4 className="fast_courses_title">Популярное</h4>
          <p className="fast_courses_subtitle">
            Самые популярные курсы на нашем сайте
          </p>
          <CardList cards={slicedPopularCards} favoriteCards={favoriteCards} />
        </div>
      </div>
    </div>
  );
}

export default Recomendation;
