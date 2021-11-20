import React from "react";
import CardItem from "./CardItem";

function CardList({ cards }) {
  return (
    <div className="row justify-content-between">
      {cards.map((item, index) => (
        <CardItem
          key={index}
          title={item.title}
          text={item.text}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default CardList;
