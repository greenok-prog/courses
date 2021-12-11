import React, { useState } from "react";
import UsersCardList from "../components/Education/UsersCardList";
import CardList from "../components/CardList";
import { useSelector } from "react-redux";

function Education() {
  const { favorite, purchasedCourses } = useSelector((state) => state.user);

  const [activeItem, setActiveItem] = useState("learning");

  const changeActiveItem = (item) => {
    setActiveItem(item);
  };

  const links = [
    { item: "learning", name: "Все курсы" },
    { item: "wishlist", name: "Список желаний" },
  ];

  return (
    <>
      <div className="education">
        <div className="container education_inner">
          <div className="education_header">
            <h2 className="education_header__title">Мое обучение</h2>
            <ul className="education_header__navbar">
              {links.map((el, index) => (
                <li
                  key={el.item}
                  onClick={() => changeActiveItem(el.item)}
                  className={`education_header__navbar-item ${
                    activeItem === el.item
                      ? "education_header__navbar-active"
                      : ""
                  }`}
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-lg">
        {activeItem === "learning" ? (
          <UsersCardList cards={purchasedCourses} />
        ) : (
          <CardList cards={favorite} />
        )}
      </div>
    </>
  );
}

export default Education;
