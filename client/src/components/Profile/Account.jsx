import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../store/actions/user";
import ErrorMessage from "../UI/ErrorMessage";
import ChangeEmailModal from "./ChangeEmailModal";

function Account() {
  const { currentUser, message } = useSelector((state) => state.user);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const [passwordForm, setPasswordForm] = useState({
    oldPass: "",
    newPass: "",
    passRepeat: "",
  });
  const changePasswordHandler = () => {
    if (passwordForm.newPass === passwordForm.passRepeat) {
      dispatch(
        changePassword(
          currentUser.user._id,
          passwordForm.oldPass,
          passwordForm.newPass
        )
      ).then((res) => {
        if (res.status === 400) {
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 3000);
        } else {
          setPasswordForm({ oldPass: "", newPass: "", passRepeat: "" });
          alert("Данные обновлены");
        }
      });
    } else {
      alert("Пароли не совпадают");
    }
  };

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
              value={currentUser.user.email}
              readOnly
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
          {isError && <ErrorMessage message={message} />}
          <input
            className="input"
            placeholder="Старый пароль"
            type="password"
            onChange={(e) =>
              setPasswordForm({ ...passwordForm, oldPass: e.target.value })
            }
            value={passwordForm.oldPass}
          />
          <input
            className="input"
            placeholder="Новый пароль"
            type="password"
            onChange={(e) =>
              setPasswordForm({ ...passwordForm, newPass: e.target.value })
            }
            value={passwordForm.newPass}
          />
          <input
            className="input"
            placeholder="Введите пароль снова"
            type="password"
            onChange={(e) =>
              setPasswordForm({ ...passwordForm, passRepeat: e.target.value })
            }
            value={passwordForm.passRepeat}
          />
          <button
            onClick={changePasswordHandler}
            className="btn bord profile_form__input-button"
          >
            Изменить пароль
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
