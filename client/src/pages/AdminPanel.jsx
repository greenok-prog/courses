import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Users from "../components/AdminPanel/Users";
import Search from "../components/Home/Search";

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
  }, [dispatch]);
  const { users } = useSelector((state) => state.user);
  const changeActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="container">
      <ul className="education_header__navbar mb-5">
        <Link to={"/addCard"}>Создать карточку</Link>
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
      </ul>
      {activeItem === "users" ? <Users users={users} /> : <Search />}
    </div>
  );
}

export default AdminPanel;
