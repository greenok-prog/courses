import React from "react";

function EducationLinks({ activeItem, setActiveItem }) {
  const changeActiveItem = (item) => {
    setActiveItem(item);
  };
  const links = [
    { item: "learning", name: "Все курсы" },
    { item: "wishlist", name: "Список желаний" },
  ];
  return (
    <ul className="education_header__navbar">
      {links.map((el, index) => (
        <li
          key={el.item}
          onClick={() => changeActiveItem(el.item)}
          className={`education_header__navbar-item ${
            activeItem === el.item ? "education_header__navbar-active" : ""
          }`}
        >
          {el.name}
        </li>
      ))}
    </ul>
  );
}

export default EducationLinks;
