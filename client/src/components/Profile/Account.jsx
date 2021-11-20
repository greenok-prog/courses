import React from "react";
import ChangeEmailModal from "./ChangeEmailModal";

function Account() {
  return (
    <div className="col-sm-6 profile_form">
      <div className="profile_form__info text-lg-center text-center">
        <h3>Учетная запись</h3>
        <p>Здесь вы можете изменить настройки учетной записи и пароль</p>
      </div>
      <div className="profile_form__inputs">
        <div className="profile_form__input d-flex flex-column">
          <p className="profile_form-title">Адрес электронной почты:</p>
          <div className="input-group">
            <input
              value="example@gmail.com"
              disabled
              type="text"
              aria-label="First name"
              className="form-control"
            />
            <span className="input-group-text m-0 p-0">
              <ChangeEmailModal
                className="modalWindow"
                value="Изменить"
                isLink={false}
              />
            </span>
          </div>
        </div>

        <div className="profile_form__input d-flex flex-column">
          <p className="profile_form-title ">Пароль</p>
          <input
            className="input"
            placeholder="Старый пароль"
            type="password"
          />
          <input className="input" placeholder="Новый пароль" type="password" />
          <input
            className="input"
            placeholder="Введите пароль снова"
            type="password"
          />
          <button className="btn bord profile_form__input-button">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
