import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { registration } from "../store/actions/user";

function Registration({ role }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const dispatch = useDispatch();
  const regist = () => {
    dispatch(registration(form.name, form.email, form.password, role));
  };

  return (
    <div>
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-2"></div>
          <form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              regist();
            }}
            className="forms col-8 d-flex flex-column justify-content-center"
          >
            <p className="text-center">
              {role === "USER"
                ? "Зарегестрируйтесь и начните обучение"
                : "Делитесь знаниями на крупнейшей образовательной платформе"}
            </p>

            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input"
              type="text"
              placeholder="Имя пользователя"
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input"
              type="text"
              placeholder="Email"
            />
            <input
              autoComplete="new-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="input"
              type="password"
              placeholder="Пароль"
            />
            <input
              autoComplete="new-password"
              value={form.passwordRepeat}
              onChange={(e) =>
                setForm({ ...form, passwordRepeat: e.target.value })
              }
              className="input"
              type="password"
              placeholder="Введите пароль еще раз"
            />
            <div className="d-flex justify-content-lg-end">
              <button type="submit" className="bord col-lg-3 col-12">
                Регистрация
              </button>
            </div>
            <p className="text-center under_inputs">
              Уже зарегестрировались? <Link to="/login">Войти</Link>
            </p>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Registration;
