import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkForms = () => {
    dispatch({ type: "CHANGE_AUTH" });
    navigate("/");
  };

  return (
    <div>
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-2"></div>
          <div className="forms col-8 d-flex flex-column justify-content-center">
            <p className="text-center">Зарегестрируйтесь и начните обучение</p>
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="input"
              type="password"
              placeholder="Пароль"
            />
            <input
              value={form.passwordRepeat}
              onChange={(e) =>
                setForm({ ...form, passwordRepeat: e.target.value })
              }
              className="input"
              type="password"
              placeholder="Введите пароль еще раз"
            />
            <div className="d-flex justify-content-lg-end">
              <button onClick={checkForms} className="bord col-lg-3 col-12">
                Регистрация
              </button>
            </div>
            <p className="text-center under_inputs">
              Уже зарегестрировались? <Link to="/login">Войти</Link>
            </p>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Registration;
