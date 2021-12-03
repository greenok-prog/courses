import React from "react";
import UsersCardItem from "./UsersCardItem";

function UsersCardList({ cards }) {
  return (
    <div className="row justify-content-between">
      {cards.map((item, index) => (
        <UsersCardItem
          key={index}
          title={item.title}
          text={item.text}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default UsersCardList;
