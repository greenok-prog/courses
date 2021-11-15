import React from "react";
import { Container } from "react-bootstrap";
import CardItem from "../CardItem";

function Search({ cards }) {
  return (
    <Container className="search">
      <h4 className="">Поиск</h4>
      <div className="directions row">
        <div className="types col-lg-7">
          <button className="btn outline mb-2">Все направления</button>
          <button className="btn outline mb-2">Дизайн</button>
          <button className="btn outline mb-2">Программирование</button>
          <button className="btn outline mb-2">Маркетинг</button>
          <button className="btn outline mb-2">Дизайн</button>
          <button className="btn outline mb-2">Программирование</button>
          <button className="btn outline mb-2">Маркетинг</button>
        </div>
        <div className="search-form col-lg-5 d-flex justify-content-lg-end ">
          <div className="mt-lg-0 mt-sm-2">
            <img src="./search.svg" alt=""></img>
            <input
              className="search-input"
              type="text"
              placeholder="Поиск"
            ></input>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {cards.map((item, index) => (
          <CardItem
            key={index}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        ))}
      </div>
    </Container>
  );
}

export default Search;
