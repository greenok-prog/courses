import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfileInfo } from "../../store/actions/user";

function UserInfo() {
  const { currentUser } = useSelector((state) => state.user);
  const [userForm, setUserForm] = useState({
    firstName: currentUser?.user?.firstName,
    secondName: currentUser?.user?.secondName,
    userLink: currentUser?.user?.userLink,
    githubLink: currentUser?.user?.githubLink,
  });
  const dispatch = useDispatch();

  return (
    <div className="col-sm-6 profile_form">
      <div className="profile_form__info text-lg-center text-center">
        <h3>Мой профиль</h3>
        <p>Здесь вы можете изменить информацию о вас</p>
      </div>
      <div className="profile_form__inputs">
        <div className="profile_form__input d-flex flex-column">
          <p className="profile_form-title">Основная информация</p>
          <input
            className="input"
            onChange={(e) =>
              setUserForm({ ...userForm, firstName: e.target.value })
            }
            value={userForm.firstName}
            placeholder="Имя"
            type="text"
          />
          <input
            className="input"
            onChange={(e) =>
              setUserForm({ ...userForm, secondName: e.target.value })
            }
            value={userForm.secondName}
            placeholder="Фамилия"
            type="text"
          />
        </div>

        <div className="profile_form__input d-flex flex-column">
          <p className="profile_form-title ">Ссылки</p>
          <input
            className="input"
            onChange={(e) =>
              setUserForm({ ...userForm, userLink: e.target.value })
            }
            value={userForm.userLink}
            placeholder="Сайт"
            type="text"
          />
          <div className="input-group">
            <span className="input-group-text" id="twitter-link">
              https://github.com/
            </span>
            <input
              onChange={(e) =>
                setUserForm({ ...userForm, githubLink: e.target.value })
              }
              value={userForm.githubLink}
              type="text"
              className="form-control"
              placeholder="Ссылка на аккаунт github"
              aria-describedby="twitter-link"
            />
          </div>

          <button
            onClick={() =>
              dispatch(
                changeProfileInfo(
                  currentUser.user._id,
                  userForm.firstName,
                  userForm.secondName,
                  userForm.userLink,
                  userForm.githubLink
                )
              )
            }
            className="btn bord profile_form__input-button"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
