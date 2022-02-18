import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Users from "../components/AdminPanel/Users";
import Search from "../components/Home/Search";
import MyToast from "../components/UI/MyToast";
import { getAllCards } from "../store/actions/cards";

import { getUsers } from "../store/actions/user";

function AdminPanel() {
  const dispatch = useDispatch();
  const links = [
    { item: "courses", name: "Все курсы" },
    { item: "users", name: "Пользователи" },
  ];
  const [activeItem, setActiveItem] = useState(links[0].item);
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAllCards());
  }, [dispatch]);
  const { users, isMessage } = useSelector((state) => state.user);
  const changeActiveItem = (item) => {
    setActiveItem(item);
  };
  const filteredCourses = users.filter((user) => !user.roles.includes("ADMIN"));

  return (
    <div className="container">
      {isMessage && <MyToast />}
      <ul className="education_header__navbar mb-5">
        {links.map((el) => (
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
        <li>
          <button className="btn mt-3">
            <Link to={"/addCard"}>Создать карточку</Link>
          </button>
        </li>
      </ul>
      {activeItem === "users" ? <Users users={filteredCourses} /> : <Search />}
    </div>
  );
}

export default AdminPanel;
