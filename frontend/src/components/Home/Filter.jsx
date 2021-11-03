import React, { useState } from "react";
import { Card } from ".";

function Filter({ types, cards }) {
  const [active, setActive] = useState(0);
  return (
    <div className="container-sm">
      <h3 className="text-center header my-3">Название курса</h3>
      <div className="filtered_courses row align-items-start">
        <ul className="types col-sm-3 d-flex flex-sm-column my-3 flex-wrap flex-row">
          {types.map((item, index) => (
            <li key={item}>
              <button
                onClick={() => setActive(index)}
                className={`${
                  active === index ? "active" : ""
                } btn rounded-pill my-2 border border-2 list-item`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div className="cards col-sm-8 row justify-content-center">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              desk={card.desk}
              cost={card.cost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
