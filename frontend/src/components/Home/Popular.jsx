import React from "react";
import { Card } from ".";

function Popular({ cards }) {
  return (
    <div className="popular container-sm">
      <h3 className="text-center header my-3">Популярные курсы</h3>
      <div className="courses row py-3  justify-content-center row-wrap">
        {cards.map((el) => (
          <Card key={el.title} title={el.title} desk={el.desk} cost={el.cost} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
