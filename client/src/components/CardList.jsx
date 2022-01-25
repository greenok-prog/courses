import React from "react";

import CardItem from "./CardItem";

function CardList({ cards }) {
  return (
    <div className="row justify-content-between">
      {cards &&
        cards.map((item, index) => {
          return <CardItem key={index} card={item} />;
        })}
    </div>
  );
}

export default CardList;
