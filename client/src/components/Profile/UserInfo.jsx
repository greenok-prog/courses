import React from "react";

function UserInfo() {
  return (
    <div className="col-sm-6 profile_form">
      <div className="profile_form__info text-lg-center text-center">
        <h3>Мой профиль</h3>
        <p>Здесь вы можете изменить информацию о вас</p>
      </div>
      <div className="profile_form__inputs">
        <div className="profile_form__input d-flex flex-column">
          <p className="profile_form-title">Основная информация</p>
          <input className="input" placeholder="Имя" type="text" />
          <input className="input" placeholder="Фамилия" type="text" />
        </div>

        <div className="profile_form__input d-flex flex-column">
          <p className="profile_form-title ">Ссылки</p>
          <input className="input" placeholder="Сайт" type="text" />
          <div className="input-group">
            <span className="input-group-text" id="twitter-link">
              https://twiter.com/
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ссылка на аккаунт twiter"
              aria-describedby="twitter-link"
            />
          </div>
          <div className="input-group">
            <span className="input-group-text" id="twitter-link">
              https://facebook.com/
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ссылка на аккаунт facebook"
              id="basic-url"
              aria-describedby="twitter-link"
            />
          </div>
          <button className="btn bord profile_form__input-button">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
