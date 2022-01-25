import React from "react";
import { useSelector } from "react-redux";
import UsersCardItem from "./UsersCardItem";

function UsersCardList({ purchasedCourses }) {
  const { cards } = useSelector((state) => state.course);
  return (
    <div className="row justify-content-between">
      {cards.map((item, index) =>
        purchasedCourses.includes(item._id) ? (
          <UsersCardItem
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default UsersCardList;
