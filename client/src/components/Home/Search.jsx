import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { SearchForm, TrendList } from ".";
import { CardList } from "..";

function Search({ trends }) {
  const { cards } = useSelector((state) => state.course);

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
      {cards.length > 0 ? (
        selectedSort === "" ? (
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
        )
      ) : (
        ""
      )}
    </Container>
  );
}

export default Search;
