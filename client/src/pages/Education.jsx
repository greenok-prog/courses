import React, { useState, useEffect } from "react";
import UsersCardList from "../components/Education/UsersCardList";
import CardList from "../components/CardList";
import { useSelector } from "react-redux";

function Education() {
  const { cards } = useSelector((state) => state.course);
  const [favoriteCourses, setFavoriteCourses] = useState([]);
  const [activeItem, setActiveItem] = useState("learning");
  useEffect(() => {
    setFavoriteCourses(cards.filter((card) => card.favorite === true));
  }, [cards]);

  const changeActiveItem = (item) => {
    setActiveItem(item);
  };

  const links = [
    { item: "learning", name: "Все курсы" },
    { item: "wishlist", name: "Список желаний" },
  ];
  const usersCourses = [
    {
      id: 1,
      title: "Python",
      text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
      img: "image 2.png",
      type: "design",
    },
    {
      id: 2,
      title: "Python",
      text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
      img: "image 3.png",
      type: "design",
    },
    {
      id: 3,
      title: "Python",
      text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
      img: "image 3.png",
      type: "design",
    },
    {
      id: 4,
      title: "Python",
      text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
      img: "image 3.png",
      type: "design",
    },
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
          <UsersCardList cards={usersCourses} />
        ) : (
          <CardList cards={favoriteCourses} />
        )}
      </div>
    </>
  );
}

export default Education;
