import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CardList from "../CardList";

function Search({ cards, trends, setCards }) {
  const [searchVal, setsearchVal] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const sortedCards = [...cards].filter((card) => card.type === selectedSort);
  const searchedAndSortedCards = sortedCards.filter((card) =>
    card.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  const searchedCards = [...cards].filter((card) =>
    card.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  const cheker = (e) => {
    console.log(searchedCards);
    setsearchVal(e.target.value);
  };

  return (
    <Container className="search">
      <h4 className="">Поиск</h4>
      <div className="directions row">
        <div className="types col-lg-7">
          <button
            onClick={() => setSelectedSort("")}
            className="btn outline mb-2"
          >
            Все направления
          </button>
          {trends.map((trend, index) => (
            <button
              onClick={() => setSelectedSort(trend.type)}
              key={trend.type}
              className="btn outline mb-2"
            >
              {trend.name}
            </button>
          ))}
        </div>
        <div className="search-form col-lg-5 d-flex justify-content-lg-end ">
          <div className="mt-lg-0 mt-sm-2">
            <img src="./search.svg" alt=""></img>
            <input
              value={searchVal}
              onChange={cheker}
              className="search-input"
              type="text"
              placeholder="Поиск"
            ></input>
          </div>
        </div>
      </div>
      {selectedSort === "" ? (
        searchedCards.length ? (
          <CardList cards={searchedCards} />
        ) : (
          <h3 style={{ textAlign: "center", margin: "32px 0" }}>
            Курсы не найдены
          </h3>
        )
      ) : searchedAndSortedCards.length ? (
        <CardList cards={searchedAndSortedCards} />
      ) : (
        <h3 style={{ textAlign: "center", margin: "32px 0" }}>
          Курсы не найдены
        </h3>
      )}
    </Container>
  );
}

export default Search;
