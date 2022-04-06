import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardList } from "../components";

import { SearchForm, TrendList } from "../components/Home";

import CardPreloader from "../components/UI/CardPreloader";
import MyToast from "../components/UI/MyToast";
import { getAllCards } from "../store/actions/cards";

function TeachersRoom() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch]);
  const { currentUser, isMessage } = useSelector((state) => state.user);
  const trends = [
    { type: "design", name: "Дизайн" },
    { type: "programming", name: "Программирование" },
    { type: "marketing", name: "Маркетинг" },
  ];
  const { cards, isLoading } = useSelector((state) => state.course);
  const [searchVal, setsearchVal] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const selectSort = (id) => {
    setSelectedSort(id);
  };
  const ownCards = cards.filter((el) => el.author === currentUser.user._id);
  const sortedCards = [...ownCards].filter(
    (card) => card.type === selectedSort
  );
  const searchedAndSortedCards = sortedCards.filter((card) =>
    card.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  const searchedCards = [...ownCards].filter((card) =>
    card.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  return (
    <div className="container">
      {isMessage && <MyToast />}
      <ul className="education_header__navbar mb-5">
        <li>
          <button className="btn mt-3 ">
            <Link to={"/addCard"}>Создать карточку</Link>
          </button>
        </li>
      </ul>
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
        {cards && cards.length > 0 ? (
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
      </Container>
    </div>
  );
}

export default TeachersRoom;
