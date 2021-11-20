import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CardList from "../CardList";
import SearchForm from "./SearchForm";
import TrendList from "./TrendList";

function Search({ cards, trends }) {
  const [searchVal, setsearchVal] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const selectSort = (id) => {
    setSelectedSort(id);
  };

  const sortedCards = [...cards].filter((card) => card.type === selectedSort);
  const searchedAndSortedCards = sortedCards.filter((card) =>
    card.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  const searchedCards = [...cards].filter((card) =>
    card.title.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <Container className="search">
      <h4 className="">Поиск</h4>
      <div className="directions row">
        <TrendList
          selectSort={selectSort}
          trends={trends}
          selectAll={(e) => setSelectedSort(e)}
          selectedSort={selectedSort}
        />
        <SearchForm searchVal={searchVal} setsearchVal={setsearchVal} />
      </div>
      {/* Что это такое, мне кто-нибудь объяснит? */}
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
