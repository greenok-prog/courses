import React, { useState } from "react";
import { Link } from "react-router-dom";
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeat_password] = useState("");

  const submitBtn = () => {
    console.log(name);
    console.log(email);
    console.log(password);
  };
  return (
    <div className="registration row text-center my-5">
      <div className="col-3"></div>
      <div className="col-6 justify-content-center text-center">
        <h5 className="border-bottom py-3">
          Зарегестрируйтесь и начните обучение!
        </h5>

        <div className="mb-3 mt-3 d-flex flex-column row border-bottom py-4">
          <input
            value={name}
            onInput={(e) => setName(e.target.value)}
            type="text"
            className="mb-3 form-control inp col-12"
            placeholder="Полное имя"
          ></input>
          <input
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            type="text"
            className="mb-3 form-control inp col-12"
            placeholder="Адрес электронной почты"
          ></input>
          <input
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            type="text"
            className="mb-3 form-control inp col-12"
            placeholder="Пароль"
          ></input>
          <input
            value={repeat_password}
            onInput={(e) => setRepeat_password(e.target.value)}
            type="text"
            className="mb-3 form-control inp col-12"
            placeholder="Введите пароль еще раз"
          ></input>
          <Link to="/" onClick={submitBtn} className="btn btn-filled">
            Зарегестрироваться
          </Link>
        </div>
        <span className="text-secondary py-3 ">
          Уже зарегестрировались?
          <Link to="/login" className="mx-2 border-bottom">
            Войти
          </Link>
        </span>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default Registration;
