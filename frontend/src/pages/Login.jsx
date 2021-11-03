import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitBtn = () => {
    console.log(email);
    console.log(password);
  };
  return (
    <div className="registration row text-center my-5">
      <div className="col-3"></div>
      <div className="col-6 justify-content-center text-center">
        <h5 className="border-bottom py-3">
          Войдите в учетную запись FrizCourses
        </h5>

        <div className="mb-3 mt-3 d-flex flex-column row border-bottom py-4">
          <input
            onInput={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            className="mb-3 form-control inp col-12"
            placeholder="Адрес электронной почты"
          ></input>
          <input
            onInput={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            className="mb-3 form-control inp col-12"
            placeholder="Пароль"
          ></input>
          <Link to="/" onClick={submitBtn} className="btn btn-filled ">
            Войти
          </Link>
        </div>
        <span className="text-secondary py-3">
          Не зарегестрированы?
          <Link className="mx-2" to="/registration">
            Зарегестрироваться
          </Link>
        </span>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default Login;
