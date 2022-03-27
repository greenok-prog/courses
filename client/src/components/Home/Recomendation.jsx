import React from "react";
import { useSelector } from "react-redux";
import CardList from "../CardList";
import CardPreloader from "../UI/CardPreloader";

function Recomendation({ favoriteCards }) {
  const { cards, isLoading } = useSelector((state) => state.course);
  const popularCards = cards.sort((a, b) => (a.popular < b.popular ? 1 : -1));
  const slicedPopularCards = popularCards.slice(0, 3);

  return (
    <div>
      <div className="fast_courses">
        <div className="fast_courses_inner container-lg justify-content-center text-center">
          <h4 className="fast_courses_title">Популярное</h4>
          <i className="bi-alarm"></i>
          <p className="fast_courses_subtitle">
            Самые популярные курсы на нашем сайте
          </p>
          {cards.length ? (
            <CardList
              cards={slicedPopularCards}
              favoriteCards={favoriteCards}
            />
          ) : isLoading ? (
            <div className="d-flex row">
              {[...Array(3).keys()].map((key, index) => (
                <CardPreloader key={index} />
              ))}
            </div>
          ) : (
            <h3 style={{ textAlign: "center", margin: "32px 0" }}>
              Курсы не найдены
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recomendation;
